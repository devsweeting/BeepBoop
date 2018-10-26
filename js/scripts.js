// Business logic
//
// function Count (num) {
//   var Array = [];
//   for (var i = 0; i < num.length; i++) {
//     Array.push(num[i]);
//   }
//   console.log(Array);
// }

function checkForZero(num) {
  var numValue = num
  if ((num !== 0) && (num % 3 == 0)) {
    return "Not a number!";
  } else if (numValue === 1) {
    return "Beep!"
  } else if (numValue === 0) {
    return "Boop!"
  } else {
    return num;
    console.log(numValue);
  }
}

function translateToRobot(num) {
  var array = []
  for (var i = 0; i <= num; i++) {
    array.push(i);
  }
  console.log(array)
}

// User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var valueSwap = checkForZero(parseInt($("input#number").val()));

    var result = translateToRobot(parseInt($("input#number").val()));
    // var results = translateToRobot($("input#number").val());
    console.log(result)
    console.log(valueSwap);
  });
});
