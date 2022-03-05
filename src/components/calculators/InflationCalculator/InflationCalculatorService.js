export const getInflatedValue = (currentAmt, inflationRate, noOfYears) => {
  return parseInt(currentAmt * Math.pow((1 + inflationRate / 100), noOfYears)).toLocaleString('en-IN');
};
