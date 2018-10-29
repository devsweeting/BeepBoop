
// Business logic

var letters = ["a", "b", "c", "d"]
function numSwap(num) {
  var numValue = num.toString()
  if ((num !== 0) && (num % 3 == 0)) {
    return "I'm sorry Dev I can't do that";
  } else if (numValue.includes(letters)) {
    return "Thats not a number";
  } else if (numValue.includes("1")) {
    return "BEEP";
  } else if (numValue.includes("0")) {
    return "BOOP";
  } else {
    return num;
  }
  console.log(numValue);
}


function translateToRobot(num) {
  var array = [];
  var userNumber = num.toString();
  if (userNumber.includes("a", "b", "c", "d", "e","f","g","h","i", "j","k","l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z")) {
    return "That's not a number";
  }
else if ((num <= -1) || (num >= 999999)) {
    return "Beeeeeeeeeeeeeeeeeeeeeeeeep... cannot compute.. boop..";
}
 else {
  for (var i = 0; i <= num; i++) {
    array.push(numSwap(i));
  var arrayString = array.toString((" "));
  }
  console.log(array)
  console.log(arrayString);
  return arrayString
}
}
// User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var valueSwap = numSwap(parseInt($("input#number").val()));
    var result = translateToRobot(parseInt($("input#number").val()));
    console.log(result)
    console.log(valueSwap);
    $("#robot").fadeIn(result);
    $("#roboOutput").text(result);

  });
});



//
// function Count (num) {
//   var Array = [];
//   for (var i = 0; i < num.length; i++) {
//     Array.push(num[i]);
//   }
//   console.log(Array);
// }

// } else if ((numValue === "1") || (numValue === "11")) {
//   return "Beep!"
// } else if ((numValue === "0") || (numValue === "10")) {
//   return "Boop!"
