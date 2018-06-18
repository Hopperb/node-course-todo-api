const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
const {ObjectId} = require('mongodb');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5b26f547d7443442b0b2ee42').then((todo)=> {
//     console.log(todo)
// });

Todo.findOneAndRemove({_id: '5b26f547d7443442b0b2ee42'}).then((todo) => {
    console.log(todo)
})
