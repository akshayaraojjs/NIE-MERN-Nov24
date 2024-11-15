class AppModel {
    VendorModel = () => {
        const collection_name = 'vendor';
        const collection_fields = {
            name: String, 
            location: String, 
            rating: Number, 
            point_of_contact: String,
            phone_number: Number
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