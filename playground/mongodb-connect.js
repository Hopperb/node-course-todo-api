// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

// Destructuring ObjectId
// var obj = new ObjectId();
// console.log(obj);

// Object Destructring 
// var user = {name: 'brandon', age: 27};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
       return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     // adding a custom id prop to the collection
    //    // _id: 123, timestamp is only available when using ObjectId which mongo generates for you
    //     name: 'Deej',
    //     age: 24,
    //     location: 'Cincinnati, OH'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to add User, please try again', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    db.close();
});