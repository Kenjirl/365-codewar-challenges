// https://www.codewars.com/kata/5626b561280a42ecc50000d1/

function sumDigPow(a, b) {
    let res = [];
    for (let i = a; i < b; i++) {
        let total = 0;
        String(i).split('').map((e,i) => {
            total += Number(e)**(i+1);
        });
        if (i === total) {
            res.push(i);
        }
    }
    return res;
}

console.log(sumDigPow(1, 10));
console.log(sumDigPow(1, 100));
console.log(sumDigPow(10, 100));
console.log(sumDigPow(90, 100));