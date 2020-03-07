const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const githubHelp = require('../helpers/github.js');
const db = require('../database/index.js');


app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // model.get((err, data), req.body.search);
  const userName = req.body.search;
  var repoDeets = githubHelp.getReposByUsername(userName);
  // db.saveRepo()


  res.send('It\'s up');
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  res.send('HELLO!');
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

