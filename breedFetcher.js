const request = require("request");

const breedName = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  if (error) {
    console.error(error);
    return;
  }
  const data = JSON.parse(body);
  if (Array.isArray(data) && data.length === 0) {
    console.log("Breed not found");
    return;
  }
  console.log(data[0].description);
});
