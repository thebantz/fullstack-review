const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//FROM MDN's EXPRESS & MONGOOSE DOC
const mongoDB = 'mongodb://localhost/githubRepos';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('DB is once again ok'));

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  name: String,
  author: String,
  forks: Number
});

let Mango = mongoose.model('Mango', repoSchema); // set collection name

const saveRepo = (arrOfRepos) => {
  for (var i = 0; i < arrOfRepos.length; i++) {
    let oneRepo = new Mango({
      _id: arrOfRepos[i].id,
      name: arrOfRepos[i].name,
      author: arrOfRepos[i].author,
      forks: arrOfRepos[i].forks
    });

    oneRepo.save((err, repo) => {
      if (err) { console.log(err); }
      else { console.log('all\'s been saved'); }
    })
  }
}

module.exports.saveRepo = saveRepo;