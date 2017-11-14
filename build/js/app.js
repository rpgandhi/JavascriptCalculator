(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName){
  this.skin = skinName;
}

Calculator.prototype.add = function(number1, number2) {
  return number1 + number2;
};

Calculator.prototype.subtract = function(number1, number2) {
  return number1 - number2;
};

Calculator.prototype.multiply = function(number1, number2){
  return number1 * number2;
};

Calculator.prototype.divide = function divide(number1, number2){
  return number1 / number2;
};


exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
function PingPong(skinName){
  this.skin = skinName;
}

PingPong.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

exports.pingPongModule = PingPong;

},{}],3:[function(require,module,exports){
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

},{"./../js/calculator.js":1,"./../js/pingpong.js":2}]},{},[3]);
