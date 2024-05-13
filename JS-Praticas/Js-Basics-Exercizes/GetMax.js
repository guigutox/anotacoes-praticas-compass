const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}