const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');
const {ObjectId} = require('mongodb');

var id = '5b17513d863f5f339497fa06';

if(!ObjectId(id)){
    console.log('id not valid');
}

Todo.find({
    _id: id
}).then((todos)=> {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo)=> {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo)=> {(!todo)
    if(!todo){
        return console.log('id not found');
    }
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));

const id = '5b161a37a49e733f4003a6f5';

User.find({
    _id: id
}).then((users) => {
    console.log('Users', users);
});


if(!ObjectId(id)){
    console.log('not valid user')
}

User.findById(id).then((user) => {
    if(!user){
        return console.log('user not found')
    }
    condole.log('User by id', user)
}).catch((e) => (e));


User.findOne({
    _id: id
}).then((user) => {
    console.log('User', user);
});

