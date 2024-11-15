class FlightController {
    create = async (request, response) => {
        const form = { ...request.body };
        
        let rbody = { };
        let rstatus = 200;

        try {
            const flightModel = new FlightModel( {
                _id : new mongoose.Types.ObjectId(),
                name: form.name, 
                airlines: form.airlines, 
                source: form.source,
                destination: form.destination,
                fare: form.fare,
                booking_date: form.booking_date
            } );
            const flightModelRes = await flightModel.save();

            const flightDoc = await FlightModel.findOne({_id: flightModel._id}).lean();

            rbody = {
                data : flightDoc,
                isError: false
            };

            console.log("create", rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in creating the flight booking.\n${error}`},
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
            const updatableFlight = {
                name: form.name, 
                airlines: form.airlines, 
                source: form.source,
                destination: form.destination,
                fare: form.fare,
                booking_date: form.booking_date
            };  
            const flightModelRes = await FlightModel.findOneAndUpdate(
                        { _id : id }, 
                        updatableFlight, 
                        {new: true});
            const updatedFlight = await FlightModel.findOne({ _id: id });
            
            if(!updatedFlight) {
                rbody = {
                    data : {"message" : "flight is not found"},
                    isError: true
                };

                 console.log(rbody); 

                rstatus = 404;
            }
            else {
                rbody = {
                    data : updatedFlight,
                    isError: false,
                    isLoggedIn: true
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in updating the flight details.\n${error}`},
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
            const flightModelRes = await FlightModel.findOneAndDelete({ _id : id });

            if(!flightModelRes) {
                rbody = {
                    data : {"message" : "flight is not found"},
                    isError: true
                };

                console.log(rbody); 

                rstatus = 404;
            } 
            else {
                rbody = {
                    data : {message: "flight booking details has been Deleted successfully."},
                    isError: false
                }; 

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in deleting the flight details.\n${error}`},
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
            const flightDocs = await FlightModel.find().lean();

            rbody = {
                data : flightDocs,
                isError: false
            };
            
            console.log(rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in retrieving all the flight details.\n${error}`},
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
            const flightDoc = await FlightModel.findOne({ _id : id }).lean(); 

            if(!flightDoc) {
                rbody = {
                    data : {"message" : "flight is not found"},
                    isError: true
                };

                 console.log(rbody);

                rstatus = 404;
            }
            else {
                rbody = {
                    data : flightDoc,
                    isError: false
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in retrieving the flight details.\n${error}`},
                isError: false
            };

             console.log(rbody);  

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

}

module.exports = FlightController;