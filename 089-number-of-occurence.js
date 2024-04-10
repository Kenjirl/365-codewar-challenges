// https://www.codewars.com/kata/5865918c6b569962950002a1/

function strCount(str, letter){  
    return str.split('').filter(e => e === letter).length
    // return str.split(letter).length-1;
}

console.log(strCount('Hello', 'o'))
console.log(strCount('Hello', 'l'))
console.log(strCount('', 'z'))