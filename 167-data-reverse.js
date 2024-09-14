// https://www.codewars.com/kata/569d488d61b812a0f7000015/
// 15 September 2024

function dataReverse(data) {
    let res = [];
    let str = data.join('');

    while(str.length > 0) {
        res.push(str.substring(0,8));
        str = str.substring(8);
    }

    return res.reverse().join('').split('').map(e => +e);
}

// function dataReverse(data) {
//     const res = [];
//     for (let i = data.length; i > 0; i -= 8) {
//         res.push(...data.slice(i - 8, i));
//     }
//     return res;
// }

console.log(
    dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))