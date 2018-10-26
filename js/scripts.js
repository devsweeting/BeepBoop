// Business logic
//
// function Count (num) {
//   var Array = [];
//   for (var i = 0; i < num.length; i++) {
//     Array.push(num[i]);
//   }
//   console.log(Array);
// }

function numSwap(num) {
  var numValue = num.toString()
  if ((num !== 0) && (num % 3 == 0)) {
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if ((numValue === "1") || (numValue === "11")) {
    return "Beep!"
  } else if ((numValue === "0") || (numValue === "10")) {
    return "Boop!"
  } else {
    return num;
  }
  console.log(numValue);
}

function translateToRobot(num) {
  var array = []
  for (var i = 0; i <= num; i++) {
    array.push(numSwap(i));
  var arrayString = array.toString();
  }
  console.log(array)
  console.log(arrayString);
  return arrayString
}

// User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var valueSwap = numSwap(parseInt($("input#number").val()));
    var result = translateToRobot(parseInt($("input#number").val()));
    console.log(result)
    console.log(valueSwap);

    $("#roboOutput").text(result);

  });
});
