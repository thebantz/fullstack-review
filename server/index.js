const express = require("express");
let app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const githubHelp = require("../helpers/github.js");
const db = require("../database/index.js");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

app.post("/repos", function(req, res) {
  const userName = req.body.search;
  githubHelp.getReposByUsername(userName, (err, arrOfRepos) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    db.saveRepo(arrOfRepos);
    res.send("from app.post");
  });
});

app.get("/repos", (req, res) => {
  db.getAllRepos((err, allRepos) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      res.send(allRepos);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
