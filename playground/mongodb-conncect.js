// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb')
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err) {
      return console.log('unable to connect to mongodb');
    }

    console.log('Connceted to MongoDB Server');

//     db.collection('Todos').insertOne({
//       text: 'something to do',
//       completed: false
//     }, (err, result) => {
//        if(err) {
//            return console.log('unable to insert todo', err)
//        } 


//        console.log(JSON.stringify(result.ops, undefined, 2));
//     });



    // db.collection('Users').insertOne({

    //     name: 'jonas',
    //     age: 25,
    //     location:'Denmark'
    // }, (err, result) => {
    //     if(err) {
    //      return  console.log('unable to insert user', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.collection('Users').find({name: 'jonas'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });




    // db.close();

});