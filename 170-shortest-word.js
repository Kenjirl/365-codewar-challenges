// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/
// 16 September 2024
// 7 Kyu

function findShort(s){
    return Math.min(...s.split(' ').map(e => e.length));
}
