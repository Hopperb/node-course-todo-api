const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// const Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// const newTodo = new Todo({
//     text: "Walk the dog",
//     completed: true,
//     completedAt: 1
// });

// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// });

// const otherTodo = new Todo({
//     text: "Take over the world",
//     completed: false,
//     completedAt: 2
// })

// otherTodo.save().then((doc) => {
//     console.log('Saved todo', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// });

const User = mongoose.model('User', {
    email: { 
    type: String,
    require: true,
    trim: true,
    minlength: 1
    }
})

const newUser = new User({
    email: "brandon@mail.com"
})

newUser.save().then((doc) => {
    console.log('Saved User', doc)
}, (e) => {
    console.log('Unable to save User')
});