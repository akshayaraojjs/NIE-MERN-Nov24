'use strict';
const { server_port, cors_origin,    mongo_url } = require('./config'); 
global.server_port = server_port;
global.cors_origin = cors_origin;
global.mongo_url = mongo_url;

const express = require("express"); 
const cors = require("cors"); 
const mongoose = require("mongoose"); 

global.express = express;
global.cors = cors;
global.mongoose = mongoose;

const app = express(); 

global.app = app;

//...
const AppModel = require('./model/AppModel'); 
global.AppModel = AppModel;
//...
const AppController = require('./controller/AppController'); 
const DoctorController = require('./controller/DoctorController');//????

//...
global.appController = new AppController(); 
global.doctorController = new DoctorController();
//
const appModel = new AppModel(); 
global.appModel = appModel;
//
appController.connectToMongo();
const DoctorModel = appModel.DoctorModel(); 
global.DoctorModel = DoctorModel; 

//...
const AppRoutes = require('./routes/AppRoutes'); 
global.AppRoutes = AppRoutes;

// middlewares
    app.use(cors(cors_origin)); 
    app.use(express.json());                        
    app.use(express.urlencoded({extended: true}));  

// II - Routes for API end points
    const appRoutes = new AppRoutes();
    appRoutes.root(appController);
    //
    appRoutes.doctors(doctorController);

// III - runs the server
    app.listen(server_port, appController.serverInit);   