const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, values) {
  const output = [];
  for (let element of array)
    if (!values.includes(element)) output.push(element);
  return output;
}
