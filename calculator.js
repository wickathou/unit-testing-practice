class Calculator {
  constructor(a,b) {
    this.a = a
    this.b = b
  }

  add() {
    return this.a + this.b
  }

  substract() {
    return this.a - this.b
  }

  divide() {
    return this.a / this.b
  }

  multiply() {
    return this.a * this.b
  }
}

console.log(new Calculator(1,2).add());
console.log(new Calculator(1,2).substract());
console.log(new Calculator(1,2).divide());
console.log(new Calculator(1,2).multiply());

module.exports = Calculator