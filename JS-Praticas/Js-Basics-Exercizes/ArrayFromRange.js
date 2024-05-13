const numbers = ArrayFromRange(1,4);

console.log(numbers);

function ArrayFromRange(min, max){
    let array = [];
    for(let i = min; i <= max; i++){
        array.push(i);
    }
    return array;
}