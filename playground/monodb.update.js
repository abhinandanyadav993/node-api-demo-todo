// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require ('mongodb'); 

const url = 'mongodb://localhost:27017';


MongoClient.connect(`${url}/todoApp`,(err, client) => {
    if(err) {
        return console.log('DB connnection not connected', err);
    }
    console.log('Mongodb connected');

    const db= client.db('todoApp');

    // db.collection('Todo').findOneAndUpdate(
    //     {_id: new ObjectID('5aee025484b553046caa5028')},
    //     {
    //         $set: {
    //             complete: 'false'
    //         }
    //     },
    //     {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     }, (err) => {
    //         console.log('not update data', err);
    //     })


    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('5aee039ae2a9be0482b36132')},
        {
            $set: {
                name: 'Abhinandan yadav'
            },
            $inc:{
                age: 1
            }
        },
        {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        }, (err) => {
            console.log('not update data', err);
        })

    client.close();
})
