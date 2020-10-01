require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const { yelp } = require("./yelpAPI");

app.get("/", (req, res) => {
  yelp().then(response => {
    console.log(response);
  });
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
