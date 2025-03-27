// Import required modules
const express = require("express"); // Import Express framework
const { getDb, connectToDb } = require("./db"); // Import database functions
const { ObjectId } = require("mongodb"); // Import ObjectId for MongoDB

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Variable to store database connection
let db;

// Connect to the database before starting the server
connectToDb((err) => {
  if (!err) {
    // Start the server on port 3000 if no error occurs
    app.listen("3000", () => {
      console.log("App listening on port 3000");
    });

    // Get the database connection
    db = getDb();
  }
});

//  enable pagination
// app.get("/books", (req, res) => {
//   const page = req.query.p || 0; // Get the page number from query params (default is 0)
//   const booksPerPage = 3; // Number of books per page

//   let books = [];

//   db.collection("books")
//     .find()
//     .sort({ author: 1 }) // Sort by author's name
//     .skip(page * booksPerPage) // Skip books from previous pages
//     .limit(booksPerPage) // Limit results per page
//     .forEach((book) => books.push(book))
//     .then(() => {
//       res.status(200).json(books);
//     })
//     .catch(() => {
//       res.status(500).json({ error: "Could not fetch the documents" });
//     });
// });

//get books
app.get("/books", (req, res) => {
  let books = [];

  db.collection("books")
    .find() // Get all books
    .sort({ author: 1 }) // Sort books by author's name (ascending)
    .forEach((book) => books.push(book)) // Push each book into the array
    .then(() => {
      res.status(200).json(books); // Send books as JSON response
    })
    .catch(() => {
      res.status(500).json({ error: "Could not fetch the documents" }); // Error handling
    });
});

//get book by id
app.get("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .findOne({ _id: new ObjectId(req.params.id) }) // Find book by ID
      .then((doc) => {
        res.status(200).json(doc); // Return the book as JSON
      })
      .catch(() => {
        res.status(500).json({ error: "Could not fetch the document" });
      });
  } else {
    res.status(500).json({ error: "Invalid document ID" }); // Handle invalid ID error
  }
});

// add new book
app.post("/books", (req, res) => {
  const book = req.body; // Get book data from request body

  db.collection("books")
    .insertOne(book) // Insert new book into the database
    .then((result) => {
      res.status(201).json(result); // Return success response
    })
    .catch(() => {
      res.status(500).json({ error: "Could not create new document" });
    });
});

// delete book
app.delete("/books/:id", (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .deleteOne({ _id: new ObjectId(req.params.id) }) // Delete book by ID
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not delete the document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid document ID" });
  }
});

// update book
app.patch("/books/:id", (req, res) => {
  const updates = req.body; // Get updates from request body

  if (ObjectId.isValid(req.params.id)) {
    db.collection("books")
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates }) // Update book fields
      .then((result) => {
        res.status(200).json(result);
      })
      .catch(() => {
        res.status(500).json({ error: "Could not update the document" });
      });
  } else {
    res.status(500).json({ error: "Not a valid document ID" });
  }
});
