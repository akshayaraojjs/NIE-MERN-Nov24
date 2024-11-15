class AppModel {
    FlightModel = () => {
        const collection_name = 'flight';
        const collection_fields = {
            name: String, 
            airlines: String, 
            source: String, 
            destination: String,
            fare: Number,
            booking_date: Date
        };
        const collection_config = {
            timestamps: true
        };
        
        const schema = mongoose.Schema(collection_fields, collection_config);
        const Model = mongoose.model(collection_name, schema);
    
        return Model;
    }
}

module.exports = AppModel;