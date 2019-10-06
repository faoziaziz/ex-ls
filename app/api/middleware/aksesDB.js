const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('', (err, data)=>{
    if(err) return console.log(err)
    db = client.db('sterre')

})