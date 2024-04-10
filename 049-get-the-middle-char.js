// https://www.codewars.com/kata/56747fd5cb988479af000028/

function getMiddle(s) {
    const l = s.length;
    // return l%2==0 ? s.slice(0, l/2+1).slice(-2) : s.slice(0, l/2+1).slice(-1);
    return s.slice(0, l/2+1).slice( l%2==0 ? -2 : -1);
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
console.log(getMiddle('abc'));
