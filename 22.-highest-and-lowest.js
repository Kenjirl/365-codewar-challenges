// https://www.codewars.com/kata/554b4ac871d6813a03000035/

function highAndLow(numbers){
    // let arr = numbers.split(' ').map((e) => parseInt(e,10));

    // let high = arr[0];
    // let low = arr[0];

    // arr.map((e) => {
    //     if (e > high) {
    //         high = e;
    //     }
    //     if (e < low) {
    //         low = e;
    //     }
    // });

    // return `${high} ${low}`;

    let arr = numbers.split(' ').map(Number);
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));