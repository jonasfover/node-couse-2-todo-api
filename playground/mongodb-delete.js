// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb')
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err) {
      return console.log('unable to connect to mongodb');
    }

    console.log('Connceted to MongoDB Server');

    //deletemany
    // db.collection('Todos').deleteMany({text: 'just eaten lunch '}).then((result) => {
    //   console.log(result);
    // });

    //deleteone
    // db.collection('Todos').deleteOne({text: 'just eaten lunch'}).then((result) => {
    //   console.log(result);
    // });
    
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Andrew'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("57ac8d47878a299e5dc21bc8")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });  


    // db.close();

});