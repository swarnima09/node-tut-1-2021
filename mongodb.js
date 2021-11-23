const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm'

async function dbConnected(){
    let result = await client.connect();
    let db = result.db(database)
    return db.collection('product');
}

module.exports= dbConnected()