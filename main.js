console.log('hello world');


// click a calc button to take one number btn click and apply a math operator click to another number btn click )
// calc btn takes the two number clicks and applies the math click to them
// the calc button take the two stored clicks and applies the stored operator to them

//step one: click # btn and show value on screen
//step two: click operator btn and store the value on screen &
//step two.5 as click of operator stores the correct math operator
//step three click # btn for second time, show value on screen (and maybe the stored 1st number and oper)
//step four - click calc btn shows the results of  taking the two stored values and applying the correct stored operator

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

console.dir(plusBtn);

var output = document.querySelector('#output');
var calcBtn = document.querySelector('#calc');

// var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var zeroClick = 0;
var oneClick = 1;
var twoClick = 2;
var threeClick = 3;
var fourClick = 4;
var fiveClick = 5;
var sixClick = 6;
var sevenClick = 7;
var eightClick = 8;
var nineClick = 9

// for (var = i; i = numbers.length; i++) {
//   numbersBtn[i].addEventListener('click' function(e)) {
//
//   }
// }


// function display(n1, n2) {
//   output.value = n1 + n2
// };
//
// output.value = display;


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
  // var firstClick = output.value;
  // var secondClick = 2;
  // console.log(firstClick);
  // console.log(secondClick);
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
