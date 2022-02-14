const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      const description = data.length === 0 ? null : data[0].description;
      const err = !description ? "Breed not found" : error;
      callback(err, description);
    }
  });
};

module.exports = {
  fetchBreedDescription
};