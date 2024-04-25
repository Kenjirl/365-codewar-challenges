// https://www.codewars.com/kata/57f609022f4d534f05000024/

function stray(numbers) {
    numbers.sort((a,b)=>a-b);
    return numbers[0] === numbers[1] ? numbers[numbers.length-1] : numbers[0];
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]))
console.log(stray([1,1,2]))