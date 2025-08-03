// Examples of prototypes

// String.prototype.yell = function () {
//   return `${this.toUpperCase()}!!! AAARGGGG`;
// };

// Array.prototype.pop = function () {
//   return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF";
// };

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${b}, ${g})`;
// }

// hex(255, 100, 25);
// rgb(255, 100, 125);

// --------- EXAMPLE OF A FACTORY FUNCTION -----//
// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }

// const firstColor = makeColor(35, 255, 150);

// ---- EXAMPLE OF A CONSTRUCTOR FUNCTION --- //

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// const color1 = new Color(40, 255, 60);

// EXAMPLE OF A CLASS

// class Color {
//   constructor(r, g, b, name) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     this.name = name;
//   }
//   innerRGB() {
//     const { r, g, b } = this;
//     return `${r}, ${g}, ${b}`;
//   }
//   rgb() {
//     return `rgb(${this.innerRGB()})`;
//   }
//   rgba(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${this.innerRGB()}, ${a})`;
//   }
//   hex() {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }
// }

// const red = new Color(255, 67, 89, "tomato");
// const white = new Color(255, 255, 255, "white");

class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return `MEEEEEOOOOOOOW!!`;
  }
}

class Dog extends Pet {
  bark() {
    return `WOOOOOOOF!!`;
  }
  eat() {
    return `${this.name} is scarfing down food!`;
  }
}
