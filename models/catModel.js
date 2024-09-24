// models/catModel.js
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();
    
// Use the environment variables in your code
const URI = process.env.URI;

const uri = URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let collection;

async function connectDB() {
    if (!collection) {
        try {
            await client.connect();
            collection = client.db().collection('test');
        } catch (ex) {
            console.error('Database connection error:', ex);
        }
    }
}

async function getAllCats() {
    await connectDB();
    return collection.find({}).toArray();
}

async function postCat(cat) {
    await connectDB();
    return collection.insertOne(cat);
}

module.exports = { getAllCats, postCat };
