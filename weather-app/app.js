const geocode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");

const input = process.argv[2];

if (!input) {
  console.log("Please enter location");
} else {
  geocode(input, (error, { latitude, longitude, location } = {}) => {
    if (error) return console.log(error);

    forecast(latitude, longitude, (error, data2) => {
      if (error) return console.log(error);
      console.log(data2.location + ", " + data2.country);
      console.log(
        data2.description +
          ". Temperature = " +
          data2.temp +
          " degrees, Feels like = " +
          data2.feelslike +
          " degrees."
      );
    });
  });
}
