'use strict'
let addition = function (firstNum, secondNum){
  addition = firstNum + secondNum;
};

let randomNumberinInterval = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

let commentLength = (commentary, maxLength) => {
  return commentary.length <= maxLength;
};

let getArrayRandomElement = (array) =>  {
  let randomElement = Math.floor(Math.random() * array.length);
  return array[randomElement];
};

export {addition, randomNumberinInterval, commentLength, getArrayRandomElement};
