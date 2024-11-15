class VendorController {
    create = async (request, response) => {
        const form = { ...request.body };
        
        let rbody = { };
        let rstatus = 200;

        try {
            const vendorModel = new VendorModel( {
                _id : new mongoose.Types.ObjectId(),
                name: form.name, 
                location: form.location, 
                rating: form.rating,
                point_of_contact: form.point_of_contact,
                phone_number: form.phone_number
            } );
            const vendorModelRes = await vendorModel.save();

            const vendorDoc = await VendorModel.findOne({_id: vendorModel._id}).lean();

            rbody = {
                data : vendorDoc,
                isError: false
            };

            console.log("create", rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in creating the vendor.\n${error}`},
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
            const updatableVendor = {
                name: form.name, 
                location: form.location, 
                rating: form.rating,
                point_of_contact: form.point_of_contact,
                phone_number: form.phone_number
            };  
            const vendorModelRes = await VendorModel.findOneAndUpdate(
                        { _id : id }, 
                        updatableVendor, 
                        {new: true});
            const updatedVendor = await VendorModel.findOne({ _id: id });
            
            if(!updatedVendor) {
                rbody = {
                    data : {"message" : "vendor not found"},
                    isError: true
                };

                 console.log(rbody); 

                rstatus = 404;
            }
            else {
                rbody = {
                    data : updatedVendor,
                    isError: false,
                    isLoggedIn: true
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in updating the vendor details.\n${error}`},
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
            const vendorModelRes = await VendorModel.findOneAndDelete({ _id : id });

            if(!vendorModelRes) {
                rbody = {
                    data : {"message" : "vendor not found"},
                    isError: true
                };

                console.log(rbody); 

                rstatus = 404;
            } 
            else {
                rbody = {
                    data : {message: "vendor details has been Deleted successfully."},
                    isError: false
                }; 

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in deleting the vendor details.\n${error}`},
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
            const vendorDocs = await VendorModel.find().lean();

            rbody = {
                data : vendorDocs,
                isError: false
            };
            
            console.log(rbody); 
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in retrieving all the vendor details.\n${error}`},
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
            const vendorDoc = await VendorModel.findOne({ _id : id }).lean(); 

            if(!vendorDoc) {
                rbody = {
                    data : {"message" : "vendor not found"},
                    isError: true
                };

                 console.log(rbody);

                rstatus = 404;
            }
            else {
                rbody = {
                    data : vendorDoc,
                    isError: false
                };

                console.log(rbody); 
            }
        }
        catch( error ) {
            rbody = {
                data : {message : `Error in retrieving the vendor details.\n${error}`},
                isError: false
            };

             console.log(rbody);  

            rstatus = 500;
        }

        response.status(rstatus).send(rbody);
    }

}

module.exports = VendorController;