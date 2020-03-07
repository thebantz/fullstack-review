const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//FROM MDN's EXPRESS & MONGOOSE DOC
const mongoDB = 'mongodb://localhost/githubRepo';
mongoose.connect(mongoDB, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('DB is once again ok'));

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  name: String,
  author: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

const saveRepo = (arrOfRepos) => {
  for (var i = 0; i < arrOfRepos.length; i++) {
    let oneRepo = new Repo({
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

// coolRepo.save((err, repo) => {
//   if (err) { console.log(err); }
//   console.log(repo.name, ' has been saved to the database!');
// });

module.exports.saveRepo = saveRepo;

//FROM MONGOOSE QUICKSTART ---
// mongoose.connect('mongodb://localhost/1128', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, '***connection error:'));
// db.once('open', function () {
//   console.log('**** database is still ok ****');
// });

// FROM MONGOOSE_MODELS: const connection = mongoose.createConnection('mongodb://localhost:1128/test');