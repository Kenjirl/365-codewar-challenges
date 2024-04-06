// https://www.codewars.com/kata/551f37452ff852b7bd000139/

function addBinary(a,b) {
    let n = a+b;
    let arr = [];
    while (n>=1) {
        arr.push(n%2);
        n = Math.floor(n/2);
    }
    return arr.reverse().join('');
    // return (a+b).toString(2)
}

console.log(addBinary(1,1));