const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comm'

async function getData(){
    let result = await client.connect();
    let db = result.db(database)
    //go to particular collection tab;e
    let collection = db.collection(('product'));
    let response = await collection.find({}).toArray()
    console.log(response)

}

getData()