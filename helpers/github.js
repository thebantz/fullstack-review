const request = require('request');
const config = require('../config.js');
const axios = require('axios');

let getReposByUsername = (userName) => {
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
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

module.exports.getReposByUsername = getReposByUsername;