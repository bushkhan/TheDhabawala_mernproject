import reservation from "../models/reservation";
const reservationController = {
    async add(req, res, next) {
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const date = req.body.date;
        const noOfPeople = req.body.noOfPeople;
    
        const newReservation = new reservation({
            name,
            email, 
            mobile, 
            date, 
            noOfPeople 
        });
    
        newReservation.save()
            .then(() => res.json('Reservation added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    }
}

export default reservationController;