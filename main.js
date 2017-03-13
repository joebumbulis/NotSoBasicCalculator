console.log('hello world');

var oneBtn = document.querySelector('#one');
var twoBtn = document.querySelector('#two');
var threeBtn = document.querySelector('#three');
var fourBtn = document.querySelector('#four');
var fiveBtn = document.querySelector('#five');
var sixBtn = document.querySelector('#six');
var sevenBtn = document.querySelector('#seven');
var eightBtn = document.querySelector('#eight');
var nineBtn = document.querySelector('#nine');
var zeroBtn = document.querySelector('#zero');

var numbersBtn = document.querySelectorAll('.number');
// console.log(numbersBtn[0]);

///non-number buttons
var plusBtn = document.querySelector('#plus');
var minusBtn = document.querySelector('#minus');
var multiplyBtn = document.querySelector('#multiply');
var divideBtn = document.querySelector('#divide');

var output = document.querySelector('#output');
var calcBtn = document.querySelector('#calc');
var clearBtn =document.querySelector('#clear');



zeroBtn.addEventListener('click', function(){
  output.value = 0;
  var firstClick = output.value;
  console.log(firstClick);
});

oneBtn.addEventListener('click', function(){
  output.value = 1;
  var firstClick = output.value;
  console.log(firstClick);
});

twoBtn.addEventListener('click', function(){
  output.value = 2;
  var firstClick = output.value;
  var secondClick = 2;
  console.log(firstClick);
  console.log(secondClick);
});

threeBtn.addEventListener('click', function(){
  output.value = 3;
  // var firstClick = output.value;
  // var secondClick = 3;
  // console.log(firstClick);
  // console.log(secondClick);
});

fourBtn.addEventListener('click', function(){
  output.value = 4;
  var firstClick = output.value;
  console.log(firstClick);
});

fiveBtn.addEventListener('click', function(){
  output.value = 5;
  var firstClick = output.value;
  console.log(firstClick);
});

sixBtn.addEventListener('click', function(){
  output.value = 6;
  var firstClick = output.value;
  console.log(firstClick);
});
sevenBtn.addEventListener('click', function(){
  output.value = 7;
  var firstClick = output.value;
  console.log(firstClick);
});

eightBtn.addEventListener('click', function(){
  output.value = 8;
  var firstClick = output.value;
  console.log(firstClick);
});

nineBtn.addEventListener('click', function(){
  output.value = 9;
  var firstClick = output.value;
  console.log(firstClick);
});

clearBtn.addEventListener('click', function(){
  output.value = ' ';
})


plusBtn.addEventListener('click', function(){
  n1 = output.value;
  operator = '+';
  output.value = ' ';
  console.log (n1, operator);
});
minusBtn.addEventListener('click', function(){
  n1 = output.value;
  operator = '-';
  output.value = ' ';
  console.log (n1, operator);
});
multiplyBtn.addEventListener('click', function(){
  n1 = output.value;
  operator = '*';
  output.value = ' ';
  console.log (n1, operator);
});
divideBtn.addEventListener('click', function(){
  n1 = output.value;
  operator = '/';
  output.value = ' ';
  console.log (n1, operator);
});


calcBtn.addEventListener('click', function(){
  console.log(n1);
  console.log(answer);
  if (operator === '+') {
    var answer = Number(n1) + Number(output.value);
  }
  else if (operator === '-') {
    var answer = Number(n1) - Number(output.value);
  }
  else if (operator === '*') {
    var answer = Number(n1) * Number(output.value);
  }
  else {
    var answer = Number(n1) / Number(output.value);
  }
  output.value = answer;
});
