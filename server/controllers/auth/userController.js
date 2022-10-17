import { User } from "../../models";
import CustomtErrorHandler from '../../services/CustomeErrorHandler.js'

const userController = {
    async me(req,res,next){
        try {
            const user = await User.findOne({ _id: req.user._id}).select('-password -updatedAt -__v');

            if(!user){
                return next(CustomtErrorHandler.notFound());
            }

            res.json(user);


        } catch (error) {
            return next(error);
        }
    }
}

export default userController;