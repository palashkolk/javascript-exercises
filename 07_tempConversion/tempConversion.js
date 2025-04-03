const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelcius=(temperatureInFahrenheit -32)*100/180;
  return Number(temperatureInCelcius.toFixed(1));
};

const convertToFahrenheit = function(temperatureInCelcius) {
  let temperatureInFahrenheit=(temperatureInCelcius-0)*180/100+32;
  return Number(temperatureInFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
