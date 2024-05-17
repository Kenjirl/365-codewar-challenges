// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/
// 17 Mei 2024

function race(v1, v2, g) {
    if (v1 >= v2) return [-1, -1, -1];
    
    const timeInHours = g / (v2 - v1);
    
    const hours = Math.floor(timeInHours);
    const minutes = Math.floor((timeInHours - hours) * 60);
    const seconds = Math.floor(((timeInHours - hours) * 60 - minutes) * 60);
    
    return [hours, minutes, seconds];
}

console.log(race(720,850,70))
console.log(race(80,91,37))
console.log(race(80,100,40))
console.log(race(720,850,37))