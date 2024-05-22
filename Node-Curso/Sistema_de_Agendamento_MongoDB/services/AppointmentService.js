let appointment = require("../models/Appointment");
let mongoose = require("mongoose");
let AppointmentFactory = require("../factories/AppointmentFactory");
let mailer = require("nodemailer");


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
            finished: false,
            notified: false
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


    //Query onde email é igual ao parametro ou cpf é igual ao parametro
    async Search(query){
        try{
            let appos = await Appo.find().or([{email: query},{cpf: query}])
            return appos;   
        }catch(err){
            console.log(err);
            return [];
        }
    }

   
   //Notifica o paciente que a consulta vai acontecer em 1h
    /*async SendNotification(){
        var appos = await this.GetAll(false);
        
        var transporter = mailer.createTransport({
            host: "smtp.mailtrap.io" ,
            port: 25,
            auth: {
                user: "3edb05efa41bb6",
                pass: "f4d4d2222c6acd"
            }
         });

        appos.forEach(async app => {
            
            var date = app.start.getTime(); 
            var hour = 1000 * 60 * 60;
            var gap = date-Date.now();

            if(gap <= hour){
                
                if(!app.notified){

                    await Appo.findByIdAndUpdate(app.id,{notified: true});
                    
                    transporter.sendMail({
                        from: "Victor Lima <victor@guia.com.br>",
                        to: app.email,
                        subject: "Sua consulta vai acontecer em breve!",
                        text: "Conteúdo qualquer!!!!! Sua consulta vai acontecer em 1h"
                    }).then( () => {

                    }).catch(err => {

                    })

                }
            }

        })
    }*/




}


module.exports = new AppointmentService();