// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/

function monkeyCount(n) {
    return Array.from({length:n}, (e,i) => i+1);
}

console.log(monkeyCount(10));