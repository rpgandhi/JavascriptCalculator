var Calculator = require('./../js/calculator.js').calculatorModule;

$(document).ready(function() {
  $('#add').click(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.add(number1, number2);
    $('#output').text(result);
  });

  $('#subtract').click(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.subtract(number1, number2);
    $('#output').text(result);
  });

  $('#divide').click(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.divide(number1, number2);
    $('#output').text(result);
  });

  $('#multiply').click(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var simpleCalculator = new Calculator("hot pink");
    var result = simpleCalculator.multiply(number1, number2);
    $('#output').text(result);
  });
});

var PingPong = require('./../js/pingpong.js').pingPongModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simplePingPong = new PingPong("hot pink");
    var output = simplePingPong.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
