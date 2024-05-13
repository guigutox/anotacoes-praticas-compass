const numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(includes(numbers, 1));

function includes(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return true;
        }
    }
    return false;
}