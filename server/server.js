const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require ('mongodb'); 


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


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
            res.send({todos});
    }, (err) =>{
        res.status(400).send(err);
    });
})


// get Todo /1233

app.get('/todo/:id', (req, res) => {
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }else{
        Todo.findById(id).then((todo)=>{
            if(!todo){
                return res.status(400).send();
            }
            res.send(todo);
        }).catch((e)=>{
            res.status(400).send();
        });
    }
})

const port = process.env.PORT | 1300;
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