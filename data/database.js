const mongodb = require("mongodb");
// imports goes above

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  // connecting to MongoDB server
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  // connecting to database
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You need to connect first!");
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};

