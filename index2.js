const { nextISSTimesForMyLocation } = require("./iss_promised");
require("dotenv").config();

const printPassTimes = function (passTimes) {
  const datetime = new Date(0);
  passTimes.forEach((pass) => {
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);
  });
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
