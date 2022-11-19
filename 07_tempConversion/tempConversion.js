const ftoc = function(tempF) {
  let convertedC = (tempF-32) * (5/9);
  convertedC = Math.round(convertedC *10) / 10;
  return convertedC
};

const ctof = function(tempC) {
  let convertedF = (tempC * (9/5) + 32);
  convertedF = Math.round(convertedF * 10) / 10;
  return convertedF;
};




// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
