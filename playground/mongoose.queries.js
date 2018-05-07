const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');


const id = '5aeff3728f0e0104e076cc8c';

Todo.find({
    _id: id
}).then((result)=>{
    console.log('Todos:' , result);
})

Todo.findOne({
    _id: id
}).then((result)=>{
    console.log('Todos:' , result);
})

Todo.findById({
    _id: id
}).then((result)=>{
    if(!result)
    console.log('Todos:' , result);
})