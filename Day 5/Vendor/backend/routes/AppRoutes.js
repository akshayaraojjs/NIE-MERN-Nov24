class AppRoutes {   
    vendors = (vendorsController) => {
        app.post("/vendors",  vendorsController.create);             
        app.get("/vendors",  vendorsController.readAll);     
        app.get("/vendors/:id", vendorsController.readById);
        app.put("/vendors/:id", vendorsController.update);
        app.delete("/vendors/:id", vendorsController.remove);
    }
    
    root = (appController) => {
        app.get("/", appController.serverRootAction); 
    }
}

module.exports = AppRoutes;