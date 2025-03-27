// Import MongoClient from the MongoDB package
const { MongoClient } = require("mongodb");

// Variable to store the database connection
let dbConnection;

module.exports = {
  // Function to connect to the database
  connectToDb: (cb) => {
    // Connect to MongoDB using the given URL
    MongoClient.connect("mongodb://localhost:27017/bookstore")
      .then((client) => {
        // Store the database connection in dbConnection
        dbConnection = client.db();
        // Call the callback function without an error (successful connection)
        return cb();
      })
      .catch((err) => {
        // If an error occurs, print it and call the callback with the error
        console.log(err);
        return cb(err);
      });
  },

  // Function to get the database connection
  getDb: () => dbConnection,
};
