const array = [1, 4, 6, 8, 10];
const sum = 14;

function myFunction(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {      
            if (arr[i] + arr[j] === num) {
                console.log(`Numbers: ${arr[i]} və ${arr[j]}`);
                return true;
            }
        }
    }
    return false;
}

console.log(myFunction(array, sum));