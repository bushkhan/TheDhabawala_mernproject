import Joi from 'joi';

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
        menuImage: Joi.string(),
        dhabaImage: Joi.string()
    }
);


export default dhabaSchema;