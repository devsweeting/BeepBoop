// Business logic
function translate(number) {}
  var numArray = []
  for (var i = 0; i <= 10; i++) {
    numArray.push(i)
  }
  console.log(numArray);

  numArray.forEach(function(numbers)) {
    if (number === 0) {numbers.push("Beep!")
  console.log(numArray);
    }
  }

function beep(num) {
var beep = []
  if (num === 0) {num = "Beep!"}
  console.log(beep)
  return beep.push(num)
};



// User Interface Logic
$(document).ready(function() {
  $("userInput").submit(function(event) {
    event.preventDefault();
    translate(parseInt($("input#number").val()));
    beep(parseInt($("input#number").val()));


    // $("#Output").text(numArray);
  });
});
