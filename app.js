//setup for server to connect to sql database products table
// grabbing the dependinces
// another test

const express = require("express"); //asking for express
const cors = require("cors"); //cors is usually for apis most of the time, can get you through permissions
const mysql = require("mysql"); // pull the mysql package

const app = express();

//connecting to my sql database eccomerce
const db = mysql.createConnection({
  // ClearDB MySQL setup credentials
  // attempting to make this website live with heroku's credentials it gave to set up a sql database
  // error occurs when I
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
db.connect((err) => {
  if (err) {
    return err;
  } else {
    console.log("database connection was successful.");
  }
});

app.use(cors());
app.use(express.json()); //formatting all results into json

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

// creating a variable that stores the port for local host
// env
let myport = 4000;

// listening for the port and logging it to the terminal
app.listen(myport, () => {
  console.log(`port is running on ${myport}`);
});
