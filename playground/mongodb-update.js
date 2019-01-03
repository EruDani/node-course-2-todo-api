//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unnable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5c2ddfb5ac938fef13e67469')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
   _id: new ObjectID('5c2dd1ef277bf617cf16b89b')
}, {
  $set: {
    name: 'Daniela'
  },
  $inc: {
    age: -1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

//  db.close();
});
