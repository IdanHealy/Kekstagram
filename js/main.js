//Функция для сложения двух чисел
let addition = function (firstNum,secondNum){
  addition=firstNum+secondNum;
  };
addition(2,2);
console.log(addition);

//Функция нахождения случайного числа в интервале
let randomInterval = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

let rndmNum = randomInterval(350, 20);
console.log(rndmNum);

let commentLength = function (comment, maxLength) {
  maxLength = 140;
  let comment = document.querySelector('.text__description');
  if(comment.value.length <= maxLength){
  return true;
  }else{
    return false;
  }
};





