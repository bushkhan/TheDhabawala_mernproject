import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomeErrorHandler';
import { User } from '../../models';
import bcrypt from 'bcrypt';
import JwtService from '../../services/JwtService';


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
        try {
            const result = await user.save();

            //token
            //now passing the the token to the user by creating it
            access_token = JwtService.sign(
                {_id: result._id, role: result.role}
            )

        } catch (error) {
            return next(error);
        }

        res.json({ access_token: access_token});
    }
}

export default registerController;