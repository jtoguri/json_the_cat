const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const description = data.length === 0 ? "Breed not found" : data[0].description;
      callback(error, description);
    }
  });
};

module.exports = {
  fetchBreedDescription
};