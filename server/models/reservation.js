import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    mobile: {
        type: Number,
        required: true,

    },
    date: {
        type: String,
        required: true,

    }, 
    noOfPeople: {
        type: Number,
        required: true,

    },
    dhabaId: {
        type:String,
        required:true
    } ,
    newCode: {
        type:String,
        required:true
    } ,
}, {
    timestamps: true
});

export default mongoose.model('Reservation', reservationSchema, 'reservations');
