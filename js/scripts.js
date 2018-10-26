// Business logic
function translate(num) {}
  var numArray = [num]
  for (var i = 0; i <= num.length; i++) {
    numArray.push(i)
  }
  console.log(numArray);

function beep(num) {
var beep = []
  if (num === 0) {num = "Beep!"}
  beep.push
console.log(beep)
};



// User Interface Logic
$(document).ready(function() {
  $("userInput").submit(function(event) {
    event.preventDefault();
    translate(parseInt($("input#number").val()));
    beep(parseInt($("input#number").val()));
  });
  $("#Output").text(numArray);
});
