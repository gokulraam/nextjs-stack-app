const express = require("express");
// const path = require("path");
// const https = require("https");
// const fs = require("fs");

const port = 4000;

const app = express();

// app.use(express.static("dist"));

app.listen(port, function() {
  console.log("Server is running on " + port + " port");
});

app.get("*", function(req, res) {
  res.send({stringToDisplay: 'Hello, this is index page !!!'});
});
