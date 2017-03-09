console.log('hi');


// click a calc button to take one number btn click and apply a math operator click to another number btn click )
//take text content from click, then apply a math operator from a btn click to the value from one number btn click
//math operator applies correct operator
// calc btn takes the two number clicks and applies the math click to them


//output the result
var oneBtn = document.querySelector('#one');
// console.dir (ONE);
var twoBtn = document.querySelector('#two');
var threeBtn = document.querySelector('#three');
var fourBtn = document.querySelector('#four');
var fiveBtn = document.querySelector('#five');
var sixBtn = document.querySelector('#six');
var sevenBtn = document.querySelector('#seven');
var eightBtn = document.querySelector('#eight');
var nineBtn = document.querySelector('#nine');
var zeroBtn = document.querySelector('#zero');

var buttons = document.querySelectorAll('button');
console.dir (buttons);

var plusBtn = document.querySelector('#plus');
var minusBtn = document.querySelector('#minus');
var multiplyBtn = document.querySelector('#multiply');
var divideBtn = document.querySelector('#divide');

var output = document.querySelector('#output');
var calcBtn = document.querySelector('#calc');

// var one = ONE.textContent;
// var two = TWO.textContent;
// var three = THREE.textContent;
// var four = FOUR.textContent;
// var five = FIVE.textContent;
// var six = SIX.textContent;
// var seven = SEVEN.textContent;
// var eight = EIGHT.textContent;
// var nine = NINE.textContent;
// var zero = ZERO.textContent;

oneBtn.addEventListener('click', function(){
  //use an if statement to know if it's the first or second number click
  var oneClick = 1;
  output.value = oneClick;
  console.log(oneClick);
})

twoBtn.addEventListener('click', function(){
  var twoClick = 2;
  output.value =twoClick;
  console.log(twoClick);
})

threeBtn.addEventListener('click', function(){
  var threeClick = 3;
  console.log(threeClick);
})
fourBtn.addEventListener('click', function(){
  var fourClick = 4;
  console.log(fourClick);
})
fiveBtn.addEventListener('click', function(){
  var fiveClick = 5;
  console.log(fiveClick);
})
sixBtn.addEventListener('click', function(){
  var sixClick = 6;
  console.log(sixClick);
})
sevenBtn.addEventListener('click', function(){
  var sevenClick = 7;
  console.log(sevenClick);
})
eightBtn.addEventListener('click', function(){
  var eightClick = 8;
  console.log(eightClick);
})
nineBtn.addEventListener('click', function(){
  var nineClick = 9;
  console.log(nineClick);
})
zeroBtn.addEventListener('click', function(){
  var zeroClick = 0;
  output.value = zeroClick;
  console.log(zeroClick);
});


// function operators() {
//   if ()
// }

//when operator btn is clicked
plusBtn.addEventListener('click', function(){
  var addition
}
)

//use the operator button to store the number //

//when calc button is clicked
output.addEventListener('click', function(click1, click2){
  //if the operator is + {print click1 + click2 }
  //else if the operator is - {print click1 - click2}
}

//call function(click1, click2)
//click1 should be the first stored value in var
//click2 should be hte second stored value in var
)
