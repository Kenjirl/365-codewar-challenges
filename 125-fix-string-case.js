// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/

function solve(s){
    const lower = s.split('').filter(e => e == e.toLowerCase()).length;
    return lower >= (s.length/2) ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve('coDe'))
console.log(solve('CODe'))
console.log(solve('coDE'))