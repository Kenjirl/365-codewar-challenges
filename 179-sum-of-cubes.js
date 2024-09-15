// https://www.codewars.com/kata/59a8570b570190d313000037/
// 16 September 2024
// 7 Kyu

function sumCubes(n){
    return [...Array(n).keys()]
        .reduce((a,b) => a + Math.pow(b+1,3),0);
}