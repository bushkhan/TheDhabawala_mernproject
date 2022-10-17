import Joi from 'joi';
import { REFRESH_SECRET } from '../../config';
import { RefreshToken } from '../../models';
import CustomErrorHandler from '../../services/CustomeErrorHandler';
import JwtService from '../../services/JwtService';
import { User } from '../../models';
const refreshController = {
    async refresh(req,res,next){
        //validate the request
        
        //validation
        const refreshSchema = Joi.object({
            refresh_token: Joi.string().required(),
        });

        const { error } = refreshSchema.validate(req.body);

        if(error){
            return next(error);
        }

        //database the refresh token is prese nt in databse or not
        //if present then regenerate the access token so that 
        //we can again retrieve all the data from the database
        let refreshToken;
        try {
            refreshToken = await RefreshToken.findOne({ token:req.body.refresh_token});
            if(!refreshToken){
                return next(CustomErrorHandler.unAuthorized("Invalid refresh token!"));
            }

            //now verify the token
            let userId;
            try {
                const { _id } = await JwtService.verify(refreshToken.token,REFRESH_SECRET);
                userId = _id;
            } catch (error) {
                return next(CustomErrorHandler.unAuthorized("Invalid refresh token!"));                
            }

            const user = await User.findOne({ _id: userId });
            if(!user){
                return next(CustomErrorHandler.unAuthorized("No user found!"));                
            }
        
            const access_token = JwtService.sign({_id: user._id, role: user.role});

            const refresh_token = JwtService.sign({_id: user._id, role: user.role}, '1y', REFRESH_SECRET);

            await RefreshToken.create({ token: refresh_token});
            res.json({ access_token: access_token, refresh_token: refresh_token});


        } catch (error) {
            return next(error);
        }
    }
}

export default refreshController;