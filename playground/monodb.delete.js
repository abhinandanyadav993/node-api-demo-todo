// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require ('mongodb'); 

const url = 'mongodb://localhost:27017';


MongoClient.connect(`${url}/todoApp`,(err, client) => {
    if(err) {
        return console.log('DB connnection not connected', err);
    }
    console.log('Mongodb connected');

    const db= client.db('todoApp');

    // deletemany
    // db.collection('Todo').deleteMany({text: 'Eat Lunch'}).then((result)=> {
    //         console.log(JSON.stringify(result, undefined, 2));
    // },(err) => {
    //     console.log('Documents not deleted', err);
    // })

    // deleteone
    // db.collection('Todo').deleteOne({text: 'Eat Lunch'}).then((docs) =>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log('Documents not deleted', err);
    // })

    // findOneAndDelete
    db.collection('Todo').findOneAndDelete({complete: 'true'}).then((docs) =>{
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log('Documents not deleted', err);
    })


    client.close();
})
