/*
MongoDB learning and testing code.
*/

const MongoClient = require('mongodb').MongoClient;
const uri = // sensitive information
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
	const collection = client.db("Shapes").collection("Shape");
	// QUERIES
	client.close();
});