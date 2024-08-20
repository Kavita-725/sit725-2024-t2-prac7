// models/catModel.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Slappy132:Slappy132@cluster0.msqk9rs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
