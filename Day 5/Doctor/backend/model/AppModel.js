class AppModel {
    DoctorModel = () => {
        const collection_name = 'doctor';
        const collection_fields = {
            doctor_name: String, 
            specialization: String, 
            location: String,
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