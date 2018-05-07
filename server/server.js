const express = require('express');
const bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require ('./models/users');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((result)=> {
        res.send(result);
    }, (err) => {
        res.status(400).send(err);
    });
})


const port = process.env.port | 1300;
app.listen(port ,() =>{
    console.log(`server running on ${port} port`);
})



// // var newTodo = new Todo({
// //     text: 'Cook Dinner'
// // });

// newTodo.save().then((result) => {
//     console.log('save Todo', result);
// }, (err)=>{
//     console.log('Unable to save Todo', err);
// });





// var userData= new User({
//     name: ' abhinandan',
//     email:'  abhinandankyadav@gmail.com'
// });

// userData.save().then((result) => {
//     console.log(JSON.stringify(result, undefined, 2));
// }, (err) => {
//     console.log('Unable to save User', err);
// })