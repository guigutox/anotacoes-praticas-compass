console.log(isLandscape(10, 20));
console.log(isLandscape(20, 10));
console.log(isLandscape2(10, 20));
console.log(isLandscape2(20, 10));

function isLandscape(width, height) {
  if (width > height) {
    return true;
  }
  return false;
}

function isLandscape2(width, height) {
  return width > height;
}
