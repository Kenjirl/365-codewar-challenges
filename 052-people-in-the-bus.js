// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/

var number = function(busStops){
    let takes = 0;
    let drops = 0;
    
    for (let i = 0; i < busStops.length; i++) {
        takes += busStops[i][0];
        drops += busStops[i][1];
    }
    return takes-drops;
}

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

console.log(number([[10,0],[3,5],[5,8]]));