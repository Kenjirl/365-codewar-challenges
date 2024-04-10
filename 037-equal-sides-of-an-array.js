// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/

function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sumLeft = 0;
        let sumRight = 0;

        for (let j = 0; j < i; j++) {
            sumLeft += arr[j]
        }

        for (let k = i+1; k < arr.length; k++) {
            sumRight += arr[k]
        }

        if (sumLeft === sumRight) {
            return i;
        }
    }
    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([1,100,50,-51,1,1]));
console.log(findEvenIndex([1,2,3,4,5,6]));
console.log(findEvenIndex([20,10,30,10,10,15,35]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));