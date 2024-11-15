class AppRoutes {   
    doctors = (doctorsController) => {
        app.post("/doctors",  doctorsController.create);             
        app.get("/doctors",  doctorsController.readAll);     
        app.get("/doctors/:id", doctorsController.readById);
        app.put("/doctors/:id", doctorsController.update);
        app.delete("/doctors/:id", doctorsController.remove);
    }
    
    root = (appController) => {
        app.get("/", appController.serverRootAction); 
    }
}

module.exports = AppRoutes;