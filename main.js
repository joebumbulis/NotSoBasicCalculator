console.log('hi');


// click a calc button to take one number btn click and apply a math operator click to another number btn click )
// calc btn takes the two number clicks and applies the math click to them
// the calc button take the two stored clicks and applies the stored operator to them

//step one: click # btn and show value on screen
//step two: click operator btn and store the value on screen
//step two.5 as click of operator stores the correct math operator
//step three click # btn for second time, show value on screen
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

var buttons = document.querySelectorAll('button');
///non-number buttons
var plusBtn = document.querySelector('#plus');
var minusBtn = document.querySelector('#minus');
var multiplyBtn = document.querySelector('#multiply');
var divideBtn = document.querySelector('#divide');

var output = document.querySelector('#output');
var calcBtn = document.querySelector('#calc');

// buttons.addEventListener('click', function()){
//
// }



zeroBtn.addEventListener('click', function(){
  var zeroClick = 0;
  output.value = zeroClick;
  var firstClick = output.value;
  console.log(firstClick);

  
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
    var twoClicks = firstClick + 1;
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
    var twoClicks = firstClick + 2;
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
    var twoClicks = firstClick + 3;
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
    var twoClicks = firstClick + 4;
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
    var twoClicks = firstClick + 5;
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
    var twoClicks = firstClick + 6;
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
    var twoClicks = firstClick + 7;
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
    var twoClicks = firstClick + 8;
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
  //   var twoClicks = firstClick + 9;
  //   output.value = twoClicks;
  //   console.log(twoClicks);
  //  })
});


plusBtn.addEventListener('click', function(){
  var addBy = output.value;
  console.log(addBy);
});
minusBtn.addEventListener('click', function(){
    var subtractBy = output.value;
    console.log(subtractBy);
});
multiplyBtn.addEventListener('click', function(){
      var multiplyBy = output.value;
      console.log(multiplyBy);
});
divideBtn.addEventListener('click', function(){
        var divideBy = output.value;
        console.log(divideBy);
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
