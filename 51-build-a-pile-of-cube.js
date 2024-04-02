// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/

function findNb(m) {
    let vol = 0;
    let n = 0;
    while (vol < m) {
        n++;
        vol += n**3;
        if (vol === m) {
            return n;
        }
    }
    return -1;
}

console.log(findNb(4183059834009));
console.log(findNb(24723578342962));
console.log(findNb(135440716410000));
console.log(findNb(40539911473216));
