import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomeErrorHandler';
import { User,RefreshToken } from '../../models';
import bcrypt from 'bcrypt';
import JwtService from '../../services/JwtService';
import { REFRESH_SECRET } from '../../config/index.js';


const registerController = {
   async register(req, res, next) {

        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password') 

        });
        const { error } = registerSchema.validate(req.body);

        if(error){
            return next(error);
        }

        //check if user already exists
        try {
            const exist = await User.exists({
                email: req.body.email
            });
            if(exist){
                return next(CustomErrorHandler.alreadyExist('Email already exists!'));
            }
        } catch (error) {
            return next(error);
        }
        
        const { name,email, password} = req.body;

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);


        //prepare the model
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        //now save in database cause user is created 
        let access_token;
        let refresh_token;  
              try {
            const result = await user.save();

            //token
            //now passing the the token to the user by creating it
            access_token = JwtService.sign({_id: result._id, role: result.role});

            refresh_token = JwtService.sign({_id: result._id, role: result.role}, '1y', REFRESH_SECRET);



            //now adding the refresh token in db
            await RefreshToken.create({ token: refresh_token});
            res.json({ access_token: access_token, refresh_token: refresh_token});


        } catch (error) {
            return next(error);
        }

    }
}

export default registerController;