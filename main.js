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

// ORIGINAL WAY TO GET A NUMBER CLICK TO OUTPUT
// oneBtn.addEventListener('click', function(){
//   //use an if statement to know if it's the first or second number click
//   var oneClick = 1;
//   output.value = oneClick;
//   console.log(oneClick);
// })
//
// twoBtn.addEventListener('click', function(){
//   var twoClick = 2;
//   output.value =twoClick;
//   console.log(twoClick);
// })
//
// threeBtn.addEventListener('click', function(){
//   var threeClick = 3;
//   output.value = threeClick;
//   console.log(threeClick);
// })
// fourBtn.addEventListener('click', function(){
//   var fourClick = 4;
//   output.value = fourClick;
//   console.log(fourClick);
// })
// fiveBtn.addEventListener('click', function(){
//   var fiveClick = 5;
//   output.value = fiveClick;
//   console.log(fiveClick);
// })
// sixBtn.addEventListener('click', function(){
//   var sixClick = 6;
//   output.value = sixClick;
//   console.log(sixClick);
// })
// sevenBtn.addEventListener('click', function(){
//   var sevenClick = 7;
//   output.value = sevenClick;
//   console.log(sevenClick);
// })
// eightBtn.addEventListener('click', function(){
//   var eightClick = 8;
//   output.value = eightClick;
//   console.log(eightClick);
// })
// nineBtn.addEventListener('click', function(){
//   var nineClick = 9;
//   output.value = nineClick;
//   console.log(nineClick);
// })
zeroBtn.addEventListener('click', function(){
  var zeroClick = 0;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    zeroBtn.addEventListener('click', function(){
    var twoClicks = 0 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});

oneBtn.addEventListener('click', function(){
  var zeroClick = 1;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
//in order for this to be able to concatenate the 'firstClick'
//with the 'twoclicks' they must be strings -
//**NEED TO FINISH
    oneBtn.addEventListener('click', function(){
    var twoClicks = 1 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
twoBtn.addEventListener('click', function(){
  var zeroClick = 2;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    twoBtn.addEventListener('click', function(){
    var twoClicks = 2 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
threeBtn.addEventListener('click', function(){
  var zeroClick = 3;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    threeBtn.addEventListener('click', function(){
    var twoClicks = 3 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
fourBtn.addEventListener('click', function(){
  var zeroClick = 4;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    fourBtn.addEventListener('click', function(){
    var twoClicks = 4 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
fiveBtn.addEventListener('click', function(){
  var zeroClick = 5;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    fiveBtn.addEventListener('click', function(){
    var twoClicks = 5 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
sixBtn.addEventListener('click', function(){
  var zeroClick = 6;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    sixBtn.addEventListener('click', function(){
    var twoClicks = 6 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
sevenBtn.addEventListener('click', function(){
  var zeroClick = 7;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    sevenBtn.addEventListener('click', function(){
    var twoClicks = 7 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});
eightBtn.addEventListener('click', function(){
  var zeroClick = 8;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);
    eightBtn.addEventListener('click', function(){
    var twoClicks = 8 + firstClick;
    output.value = twoClicks;
    console.log(twoClicks);
  })
});

nineBtn.addEventListener('click', function(){
  var zeroClick = 9;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);

//the first click is equal to 'firstClick'

  //   nineBtn.addEventListener('click', function(){
  //   var twoClicks = 9 + firstClick;
  //   output.value = twoClicks;
  //   console.log(twoClicks);
  //  })
});

plusBtn.addEventListener('click', function(){
  var firstClick = output.value;
  console.log(firstClick);

});


  // nineBtn.addEventListener('click', function(){
  //   var solution = 9 + firstClick;
  //   output.value = solution;
  //   // var firstClick = output.value;
  //   console.log(solution);




// var solution  = firstClick + secondClick

//when numberBtn clicked store in a string then when clicked again store in a string
//until operator btn is clicked. operator btn click should take the stored string
//and also store which operator btn was clicked



// function operators() {
//   if ()
// }



//when calc button is clicked
// output.addEventListener('click', function(click1, click2){
//   //if the operator is + {print click1 + click2 }
//   //else if the operator is - {print click1 - click2}
// });

//call function(click1, click2)
//click1 should be the first stored value in var
//click2 should be hte second stored value in var
