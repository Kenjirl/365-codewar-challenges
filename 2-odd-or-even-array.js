function oddOrEven(array) {
    // let a=0;
    // array.forEach(e => {
    //     a+=e;
    // });
    // let t = 'odd'
    // if (a%2 == 0) {
    //     t = 'even'
    // }
    // return t;
    return array.reduce((a,b) => a+b,0) % 2 ? 'odd' : 'even';
}

console.log(oddOrEven([0]));
console.log(oddOrEven([1]));
console.log(oddOrEven([]));
console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, 1, 3]));
console.log(oddOrEven([1023,1,2]));
console.log(oddOrEven([0, -1, -5]));