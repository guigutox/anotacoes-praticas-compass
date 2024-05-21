let appointment = require("../models/Appointment");
let mongoose = require("mongoose");
let AppointmentFactory = require("../factories/AppointmentFactory");

const Appo = mongoose.model("Appointment", appointment);

class AppointmentService {

    async Create(name, email, description, cpf, date, time) {
        let  newAppo = new Appo({
            name,
            email,
            description,
            cpf,
            date,
            time, 
            finished: false
        })

        try{
            await newAppo.save();
            return true;
        }
        catch(err){
            console.log(err)
            return false;
        }
    }

    async GetAll(showFinished){
        if(showFinished){
            return await Appo.find();
        }else{
            var appos = await Appo.find({'finished': false});
            var appointments = [];

            appos.forEach(appointment => {
                if(appointment.date != undefined){
                    appointments.push( AppointmentFactory.Build(appointment) )
                }                
            });

            return appointments;
        }
    }

    async GetById(id){

        try{
            let appo = await Appo.findById(id);
            return appo;

        }catch(error){
            console.log(error);
        }

    }

    async Finish(id){

        try{
            await Appo.findByIdAndUpdate(id, {finished: true});
            return true;
        }catch(error){
            console.log(error);
            return false;
        }

       
    }

}


module.exports = new AppointmentService();