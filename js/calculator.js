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
