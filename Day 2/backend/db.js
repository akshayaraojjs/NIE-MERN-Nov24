// Using MongoDB Driver
// const { MongoClient } =  require('mongodb');
// const uri = 'mongodb://localhost:27017/trainer_db';
// async function main(){
//     const client = new MongoClient (uri);
//     try{
//         await client.connect();	
//         console.log('Connected to MongoDB');
//         const database = client.db('trainer_db');
//         const collection = database.collection('trainers');
//         const result = await collection.insertOne({name: 'Alice', age: 25});
//         console.log('Document inserted with _id:', result.insertedId);
//         const documents = await collection.find({}).toArray();
//         console.log('Found documents:', documents);
//     }
//     finally{
//         await client.close();
//     }
// }
// main().catch(console.error);

// Using Mongoose
// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/trainer_db';
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });
// const User = mongoose.model('User', userSchema);
// async function main() {
//     try {
//         await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log('Connected to MongoDB');
//         const user = new User({ name: 'Alice', age: 25 });
//         await user.save();
//         console.log('User saved:', user);
//         const users = await User.find({});
//         console.log('Found users:', users);
//     }
//     finally {
//         await mongoose.disconnect();
//     }
// }
// main().catch(console.error);
// Perform CRUD Operations:
// Using MongoDB Driver
// const { MongoClient } =  require('mongodb');
// const uri = 'mongodb://localhost:27017/trainer_db';
// async function main(){
//     const client = new MongoClient (uri);
//     try{
//         await client.connect();
//         console.log('Connected to MongoDB');
//         const database = client.db('trainer_db');
//         const collection = database.collection('trainers');
//         const result = await collection.insertOne({name: 'Alice', age: 25});
//         console.log('Document inserted with _id:', result.insertedId);
//         const documents = await collection.find({}).toArray();
//         console.log('Found documents:', documents);
//     }
//     finally{
//         await client.close();
//     }
// }
// main().catch(console.error);

// Using Mongoose
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/trainer_akshay';
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});
const User = mongoose.model('User', userSchema);
async function main() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB\n');
        //first User
        const user = new User({ name: 'Alice', age: 25 });  //db.users.in
        await user.save();
        console.log('User saved:', user);
        const users = await User.find({});
        console.log('Found users:', users);
        // //second user
        const newUser1 = new User({ name: 'John Doe', age: 30 });
        await newUser1.save();
        console.log('User created:', newUser1);
        // //third user
        // const newUser2 = new User({ name: 'Emily', age: 20 });
        // await newUser2.save();
        // console.log('User created:', newUser2);
        // //Read user by name
        const user1 = await User.findOne({ _id: '673330cce5baa0fe354dd720' });
        console.log('User found:', user1);
        // //update a document
        const updateUser = await User.updateOne({ _id: '673330cce5baa0fe354dd720' }, { $set: { name: "Alice Martin" } });
        console.log('User updated:', updateUser);
        const users_updated = await User.find({});
        console.log('Found users:', users_updated);
        // //delete user 
        const deleteUser = await User.deleteMany({ name: 'Alice' });
        const newUsers4 = await User.find({});
        console.log("users after deletions: ", newUsers4);
    }
    finally {
        await mongoose.disconnect();
    }
}
main().catch(console.error);