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
  const userName = req.body.search;
  githubHelp.getReposByUsername(userName, (err, arrOfRepos) => {
    if (err) { console.log(err); }
    db.saveRepo(arrOfRepos);
  });

  res.send('from app.post');
});

app.get('/repos', function (req, res) {
  console.log('hi from app.get');
  res.send('HELLO!');
  // TODO: This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

