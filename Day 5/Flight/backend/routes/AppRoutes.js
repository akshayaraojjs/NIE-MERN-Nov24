class AppRoutes {   
    flights = (flightsController) => {
        app.post("/flights",  flightsController.create);             
        app.get("/flights",  flightsController.readAll);     
        app.get("/flights/:id", flightsController.readById);
        app.put("/flights/:id", flightsController.update);
        app.delete("/flights/:id", flightsController.remove);
    }
    
    root = (appController) => {
        app.get("/", appController.serverRootAction); 
    }
}

module.exports = AppRoutes;