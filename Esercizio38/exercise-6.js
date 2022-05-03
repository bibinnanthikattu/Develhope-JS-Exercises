class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(value) {

    if (value === square) {
      let squareArea = square.side * square.side;
      return squareArea
    } else if(value === rectangle){
      let rectangleArea = rectangle.width * rectangle.height;
      return rectangleArea;
    } else if (value === circle) {
      let circleArea = Math.PI * circle.radius * circle.radius;
      return circleArea
    } else {
      console.log("Function is not found!");
    }

  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));