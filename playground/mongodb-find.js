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
    // fetch all todos  = querey todos 
    // db.collection('Todos').find({
    //     _id: new ObjectId('5b143100248003330055f536')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err)=> {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Deej'}).toArray().then((docs)=> {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) => {
        console.log('Unable to fetch users', err)
    });

//    //  count method 
//     db.collection('Todos').find().count().then((count) => {
//         console.log(`Todos count: ${count}`);
//     }, (err)=> {
//         console.log('Unable to fetch todos', err);
//     });


    // db.close();
});