const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=db0c8d4d9cf3359660e16d0aac934775&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) callback("Unable to connect to the weather service.", undefined);
    else if (body.error) {
      //console.log(;
      callback("Unable to find location.", undefined);
    } else {
      const data = {
        temp: body.current.temperature,
        feelslike: body.current.feelslike,
        description: body.current.weather_descriptions[0],
        location: body.location.region,
        country: body.location.country,
      };

      callback(undefined, data);
    }
  });
};

module.exports = forecast;
