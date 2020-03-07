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
  // id: Schema.ObjectId,
  id: Number,
  name: String,
  author: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// let coolRepo = new Repo({
//   id: 12345,
//   name: 'cool repo',
//   author: 'nicolebanta',
//   stars: 5
// })

// let save = (err, repo) => {
//   // This function should save a repo or repos to the MongoDB
//   if (err) {
//     console.log(err);
//   }
//   console.log(repo.name, ' has been saved to the database');
// }
let saveRepo = (repoCallback) => {
  repoCallback();
}

// coolRepo.save((err, repo) => {
//   if (err) { console.log(err); }
//   console.log(repo.name, ' has been saved to the database!');
// });

module.exports.db = {
  saveRepo, mongoose
};

//FROM MONGOOSE QUICKSTART ---
// mongoose.connect('mongodb://localhost/1128', { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, '***connection error:'));
// db.once('open', function () {
//   console.log('**** database is still ok ****');
// });

// FROM MONGOOSE_MODELS: const connection = mongoose.createConnection('mongodb://localhost:1128/test');