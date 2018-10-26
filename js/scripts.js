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
  if (num === 0 || num % 3 === 0) {
    return "no";
  } else {
    var userNumber = num.toString("1");
    console.log(userNumber)
  }
};

// User Interface Logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    checkForZero($("input#number").val(),

  checkForZero.parseInt($("input#number").val())),

     $("#Output").text();

     event.preventDefault();
  });
});
