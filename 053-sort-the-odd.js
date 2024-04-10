// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/

function sortArray(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            continue;
        }
        for (let j = 0; j < i; j++) {
            if (array[j] % 2 === 0) {
                continue;
            }
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;

    // const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    // return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));