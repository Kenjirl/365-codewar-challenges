// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/
// 17 Mei 2024

function race(v1, v2, g) {
    if (v1 >= v2) return null;

    const totalTimeInSeconds = Math.floor((g / (v2 - v1)) * 3600);

    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = totalTimeInSeconds % 60;
    
    return [hours, minutes, seconds];

    // let time=g/(v2-v1);
    // return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}

console.log(race(720,850,70))
console.log(race(80,91,37))
console.log(race(80,100,40))
console.log(race(720,850,37))