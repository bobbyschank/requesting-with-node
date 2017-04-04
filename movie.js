let request = require('request');

console.log('IN MOVIE.JS');
function get(movieTitle) {

	let url = 'https://www.omdbapi.com/?t=' + movieTitle;
	request(url, function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred 
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
	  console.log('body:', body);
	}
);}

module.exports = get;