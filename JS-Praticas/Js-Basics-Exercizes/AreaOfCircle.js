const circle = {
  radius: 1,
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  },
};

console.log(circle.area);
