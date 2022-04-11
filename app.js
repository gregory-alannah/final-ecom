//setup for server to connect to sql database products table
// grabbing the dependinces
// another test

const express = require("express"); //asking for express
const cors = require("cors"); //cors is usually for apis most of the time, can get you through permissions
const mysql = require("mysql"); // pull the mysql package
const path = require("path");

const app = express();

//connecting to my sql database eccomerce
const db = mysql.createPool({
  // ClearDB MySQL setup credentials
  // attempting to make this website live with heroku's credentials it gave to set up a sql database
  host: "us-cdbr-east-05.cleardb.net",
  user: "bf6f41ee382d47",
  password: "b7fab6bc",
  database: "heroku_929a4dfecfd60c3",

  // local machine
  // host: "localhost",
  // user: "root",
  // password: "password",
  // database: "ecommerce",
});

// returning an error if connection was sucessful or not
// db.connect((err) => {
//   if (err) {
//     return err;
//   } else {
//     console.log("database connection was successful.");
//   }
// });

app.use(cors());
app.use(express.json()); //formatting all results into json

// The app's static directory is actually the client's build directory.
// So a request to "/app.css" would serve the file "./client/build/app.css"
app.use(express.static(__dirname + "/client/build"));

// getting the api endpoint and doing a db.query that selects all items from tables products in sql
// and returns a json file
app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// The "*" will catch ALL requests that aren't matched above.  So,
// this method will run if:
//
// 1. The path doesn't match a file in ./client/build directory
// 2. The path isn't /products
app.get("*", (req, res) => {
  // Since your app is a SPA, we want to simply serve the index.html file for
  // all app paths
  res.sendFile(path.join(__dirname, "./client/build/index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

// enviornment variable that heorku automatically uses and
// setting the port. If that doesn't exist use 3001
const port = process.env.PORT || 3001;

// listening for the port and logging it to the terminal
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
