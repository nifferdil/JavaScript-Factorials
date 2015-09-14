var factorial = function(inputNumber) {

  var total = 1;
      for (var i = 2; i <= inputNumber; i++) {
          console.log("total: "+ total);
          console.log("i :"+ i);
          total = total * i;
        }
      return total;
  }

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    inputNumber = parseInt($("input#factorialInput1").val());

    var result = factorial(inputNumber);

      $(".answer").text("The factorial of this number is: " + result);

    $("#result").show();
    event.preventDefault();
  });
});
