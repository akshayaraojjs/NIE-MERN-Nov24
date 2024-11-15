class DoctorController {
    create = async (request, response) => {
        const form = { ...request.body };
        
        let rbody = { };
        let rstatus = 200;

        try {
            const doctorModel = new DoctorModel( {
                _id : new mongoose.Types.ObjectId(),
                doctor_name: form.doctor_name, 
                specialization: form.specialization, 
                location: form.location,
                phone_number: form.phone_number
            } );
            const doctorModelRes = await doctorModel.save();

            const doctorDoc = await DoctorModel.findOne({_id: doctorModel._id}).lean();

            rbody = {
                data : doctorDoc,
                isError: false
            };

            console.log("create", rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in creating the doctor.\n${error}`},
                isError: true
            };         

            console.log("create", rbody); 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }     

    update = async (request, response) => {
        //path variables
        const id = request.params.id;
        //form posted
        const form = { ...request.body };
        
        //
        let rbody = {};
        let rstatus = 200;

        try {
            const updatableDoctor = {
                doctor_name: form.doctor_name, 
                specialization: form.specialization, 
                location: form.location,
                phone_number: form.phone_number
            };  
            const doctorModelRes = await DoctorModel.findOneAndUpdate(
                        { _id : id }, 
                        updatableDoctor, 
                        {new: true});
            const updatedDoctor = await DoctorModel.findOne({ _id: id });
            
            if(!updatedDoctor) {
                rbody = {
                    data : {"message" : "doctor is not found"},
                    isError: true
                };

                 console.log(rbody); 

                rstatus = 404;
            }
            else {
                rbody = {
                    data : updatedDoctor,
                    isError: false,
                    isLoggedIn: true
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in updating the doctor details.\n${error}`},
                isError: true,
                isLoggedIn: true
            };

            console.log(rbody); 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);        
    }
    
    remove = async (request, response) => {
        const id = request.params.id;
        
        let rbody = {};
        let rstatus = 200;

        try {
            const doctorModelRes = await DoctorModel.findOneAndDelete({ _id : id });

            if(!doctorModelRes) {
                rbody = {
                    data : {"message" : "doctor is not found"},
                    isError: true
                };

                console.log(rbody); 

                rstatus = 404;
            } 
            else {
                rbody = {
                    data : {message: "doctor is Deleted successfully."},
                    isError: false
                }; 

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in deleting the doctor details.\n${error}`},
                isError: true
            };

            console.log(rbody); 

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }  

    readAll = async (request, response) => {
        let rbody = {};
        let rstatus = 200;

        try {
            const doctorDocs = await DoctorModel.find().lean();

            rbody = {
                data : doctorDocs,
                isError: false
            };
            
            console.log(rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in retrieving all the doctor details.\n${error}`},
                isError: true
            };

            console.log(rbody);

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);  
    }
    
    readById = async (request, response) => {
        const id = request.params.id;

        let rbody = {};
        let rstatus = 200;

        try {
            const doctorDoc = await DoctorModel.findOne({ _id : id }).lean(); 

            if(!doctorDoc) {
                rbody = {
                    data : {"message" : "doctor is not found"},
                    isError: true
                };

                 console.log(rbody);

                rstatus = 404;
            }
            else {
                rbody = {
                    data : doctorDoc,
                    isError: false
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in retrieving the doctor details.\n${error}`},
                isError: false
            };

             console.log(rbody);  

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

}

module.exports = DoctorController;