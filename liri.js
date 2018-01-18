require("dotenv").config();

const Twitter = require('twitter');
const request = require('request');
const Spotify = require('node-spotify-api');

const keys = require('./keys.js');


const spotify = new Spotify(keys.spotify);
const client = new Twitter(keys.twitter);
console.log(process.argv);

// create a varaible to store command perammaters (2 varibales)
// create a function that will call the other function depending on what the command is 