import Joi from 'joi';
import CustomErrorHandler from '../../services/CustomeErrorHandler';
import { User } from '../../models';
import bcrypt from 'bcrypt';


const registerController = {
   async register(req, res, next) {

        const registerSchema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: Joi.ref('password') 

        });
        console.log(req.body);
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
        

        //hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);


        //prepare the model
        const { name,email, password} = req.body;
        const user = {
            name: name,
            email: email,
            password: hashedPassword
        }

        //now save in database cause user is created 

        try {
            const result = await User.save();

            //token
            //now passing the the token to the user by creating it

        } catch (error) {
            return next(error);
        }

        res.json({ msg: "Hello Bushra" });
    }
}

export default registerController;