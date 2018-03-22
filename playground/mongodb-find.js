// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID } = require('mongodb')
 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db ) => {
    if(err) {
      return console.log('unable to connect to mongodb');
    }

    console.log('Connceted to MongoDB Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ab119e3e9291629380960ec')
    
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        

    // }, (err) => {
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'jonas'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
  });

    // db.close();

});