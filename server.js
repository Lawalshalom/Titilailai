const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require ("body-parser");
const { check, validationResult } = require ("express-validator");

let urlencoded = bodyParser.urlencoded({extended: false});
app.use(bodyParser.json());
app.use(urlencoded);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post("/formData", [
  check
] ,(req, res) =>{
  console.log(req.body)
})
app.listen(8080);