// index.js
const { nextISSTimesForMyLocation } = require("./iss");
require("dotenv").config();

const printPassTimes = function (passTimes) {
  const datetime = new Date(0);
  passTimes.forEach((pass) => {
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  });
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success
  printPassTimes(passTimes);
});
