const mongoose = require("mongoose");

//FROM MDN's EXPRESS & MONGOOSE DOC
const mongoDB = "mongodb://localhost/practiceDB";

mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("DB is once again ok"));

const getAllRepos = callback => {
  db.collection("repos")
    .find()
    .toArray((err, results) => {
      if (err) {
        callback(err, null);
      }
      callback(null, results);
    });
};

let repoSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  author: String,
  forks: Number
});

let Repo = mongoose.model("Repo", repoSchema); // set collection name

const saveRepo = arrOfRepos => {
  for (var i = 0; i < arrOfRepos.length; i++) {
    let oneRepo = new Repo({
      _id: arrOfRepos[i].id,
      name: arrOfRepos[i].name,
      author: arrOfRepos[i].author,
      forks: arrOfRepos[i].forks
    });

    oneRepo.save((err, repo) => {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully created document in collection");
      }
    });
  }
};

module.exports = {
  saveRepo,
  getAllRepos
};
