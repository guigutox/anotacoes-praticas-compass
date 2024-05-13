const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

const count = countOccurrences(numbers, 1);

console.log(count);

function countOccurrences(array, searchElement) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      count++;
    }
  }
  return count;
}
