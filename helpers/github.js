// const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (userName, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = {
    url: `https://api.github.com/users/${userName}/repos`,
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };



  console.log('hello from github!');
  axios.request(options)
    .then(response => {
      let allRepos = [];
      response.data.forEach(repo => {
        let repoDetails = {
          id: repo.id,
          name: repo.name,
          author: repo.owner.login,
          forks: repo.forks_count
        }
        allRepos.push(repoDetails);
      })
      callback(null, allRepos);
    })
    .catch(err => console.log(err));
}

module.exports.getReposByUsername = getReposByUsername;