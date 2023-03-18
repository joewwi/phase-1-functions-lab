// Code your solution in this file!
const blockLength = 264; 
const freeSampleDistance = 400; 

function distanceFromHqInBlocks(distanceInBlocks) {
  return Math.abs(distanceInBlocks - 42);
}

function distanceFromHqInFeet(distanceInBlocks) {
  return distanceFromHqInBlocks(distanceInBlocks) * blockLength;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  const distanceInBlocks = Math.abs(endBlock - startBlock);
  return distanceInBlocks * blockLength;
}

function calculatesFarePrice(startBlock, endBlock) {
  const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  let farePrice;

  if (distanceInFeet <= freeSampleDistance) {
    farePrice = 0;
  } else if (distanceInFeet > freeSampleDistance && distanceInFeet <= 2000) {
    farePrice = (distanceInFeet - freeSampleDistance) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    farePrice = 25;
  } else {
    farePrice = "cannot travel that far";
  }

  return farePrice;
}
