function White() {
  this.name = "white";
  return {
    name: "black",
    bark: function () {
      console.log(this.name + ": 멍멍이");
    },
  };
}
const WhiteDog = new White();
WhiteDog.bark(); // black:멍멍이

function Black() {
  this.name = "white";
  return {
    name: "black",
    bark: () => {
      console.log(this.name + ":멍멍이");
    },
  };
}

const BlackDog = new Black();
BlackDog.bark(); // white:멍멍이
