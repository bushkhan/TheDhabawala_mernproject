import { Dhaba } from '../models';
import multer from 'multer';
import path, { join } from 'path';
import Joi from 'joi';
import fs from 'fs';
import CustomErrorHandler from '../services/CustomeErrorHandler';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "menuImage") {
            cb(null, './uploads/menuImages')
        }
        else if (file.fieldname === "dhabaImage") {
            cb(null, './uploads/dhabaImages');
        }

     },
     filename:(req,file,cb)=>{
         if (file.fieldname === "menuImage") {
             cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
         }
       else if (file.fieldname === "dhabaImage") {
         cb(null, file.fieldname+Date.now()+path.extname(file.originalname));
       }

     }
});
//craeting a multer function now
//and passing all the values in that
const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
}).fields(
    [
        {
            name:'menuImage',maxCount:2
        },
        {
            name: 'dhabaImage', maxCount:2
        },
    ]
);//5mb max


const dhabaController = {
    async store(req, res, next){
        //multi part form data 
        handleMultipartData(req, res, async (err)=>{
            if (err) {
                return next(CustomErrorHandler.serverError(err.message));
            }
            const filePath = req.files.menuImage[0].path.replace("\\","/");
            console.log(req.files.menuImage[0]);
            console.log(req.files.dhabaImage[0]);
            const dhabaSchema = Joi.object(
                {
                    name: Joi.string().required(),
                    contact: Joi.number().required(),
                    noOfTables: Joi.number().required(),
                    type: Joi.string().required(),
                    rating: Joi.string().required(),
                    topDishes: Joi.string().required(),
                    location: Joi.string().required(),
                    address: Joi.string().required(),
                    overview: Joi.string().required(),
                }
            );

            const { error } = dhabaSchema.validate(req.body);
            if(error){
                //delete the uploaded file asap
                fs.unlink(`../uploads/menuImages/${filePath}`,(err)=>{
                    if (err) {
                        return next(CustomErrorHandler.serverError(err.message));
                    }
                });
                return next(error);

            }
            const { name, contact, noOfTables,type, rating, topDishes, location, address, overview } = req.body;

            let document;

            try {
                document = await Dhaba.create({
                    name,
                    contact,
                    noOfTables,
                    type,
                    rating,
                    topDishes,
                    location,
                    address,
                    overview,
                    menuImage: req.files.menuImage[0].path,
                    dhabaImage: req.files.dhabaImage[0].path
                })
            } catch (error) {
                return next(error);
            }

            res.status(201).json(document);
        });
    },


    async index(req, res, next){
        let documents;
        try {
            documents = await Dhaba.find().select('-updatedAt -__v').sort({ _id: -1});

        } catch (error) {
           return next(CustomErrorHandler.serverError());
        }
        res.json(documents);
    },

    async show(req,res,next){
        let document;
        document = await Dhaba.findOne({ _id: req.params.id }).select('-updatedAt -__v');
        try {
            
        } catch (error) {
            return next(CustomErrorHandler.serverError());            
        }
        return res.json(document);
    }
}
export default dhabaController;