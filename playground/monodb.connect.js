// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require ('mongodb'); 

const url = 'mongodb://localhost:27017';

// var objectid  = new ObjectID();
// console.log(objectid);


// ES6 feature
// const user = {name: 'abhinandan', age: '25'};
// const {name} = user;
// console.log(name);

MongoClient.connect(`${url}/todoApp`,(err, client) => {
    if(err) {
        return console.log('DB connnection not connected', err);
    }
    console.log('Mongodb connected');

    const db= client.db('todoApp');

// db.collection('Todo').find({ "_id": new ObjectID('5aee025484b553046caa5028')}).toArray().then((doc) => {
//     console.log(JSON.stringify(doc, undefined, 2));
// },(err) =>{
//     console.log('Unable to fetch data', err);
// })


// db.collection('Todo').count((err, result) => {
//     console.log(result);
// })


// db.collection('Users').find({name: 'Abhinandan'}).toArray().then((docs) =>{
// console.log(JSON.stringify(docs, undefined, 2));
// },(err) => {
//     console.log('Unable to fetch users', err);
// })

    db.collection('Todo').insertOne({
        text: 'Eat Lunch',
        complete: false
    },(err,result) =>{
        if(err) {
            return console.log('unable to create Todo collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Abhinandan',
    //     age: '26',
    //     location: 'delhi'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('unable to create Users Collection', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined ,2));
    // })
    client.close();
})
