import reservation from "../models/reservation";

const reservationController = {

    async add(req, res, next) {
        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
           return result
        }
        
        // console.log(makeid(5));
        const newCode = makeid(5);
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const date = req.body.date;
        const noOfPeople = req.body.noOfPeople;
        const dhabaId = req.body.dhabaId
        const newReservation = new reservation({
            name,
            email, 
            mobile, 
            date, 
            noOfPeople,
            dhabaId,
            newCode
        });
    
        const checkInsert = await newReservation.save()
            if(checkInsert != null){
                res.json(checkInsert)
            }else{
                res.status(400).json('Something went wrong!');
            }
            // .then(() => res.json('Reservation added!'))
            // .catch(err => res.status(400).json('Error: ' + err));


            
    },

    async index(req, res, next) {
        let documents;
        try {
            documents = await reservation.find().select('-updatedAt -__v').sort({ _id: -1 });
        } catch (error) {
            return next(CustomErrorHandler.serverError());
        }
        res.json(documents);
    },

    
    async show(req, res, next) {
        let document;
        document = await reservation.findOne({ _id: req.params.id }).select('-updatedAt -__v');
        try {

        } catch (error) {
            return next(CustomErrorHandler.serverError());
        }
        return res.json(document);
    }

}
export default reservationController;