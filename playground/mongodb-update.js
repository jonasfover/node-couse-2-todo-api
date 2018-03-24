// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb')
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err) {
      return console.log('unable to connect to mongodb');
    }

    console.log('Connceted to MongoDB Server');

  //  db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID('5ab4f529f428c6436af9c8e8')

  //  }, {
  //     $set: {
  //       completed: true
  //     }
  //  }, {
  //     returnOriginal: false
  //  }).then((results) => {
  //    console.log(results);
  //  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ab130e88a0bea2ec486eac9')

  }, {
     $set: {
       name: 'jonasChange',

     },
     $inc: { age: 1
    }

     
  }, {
     returnOriginal: 'false'
  }).then((results) => {
    console.log(results);
  });



    // db.close();

});