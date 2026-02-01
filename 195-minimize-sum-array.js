// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b/solutions/javascript
// 9 Desember 2024
// 7 Kyu

function minSum(arr) {
    arr = arr.sort((a,b)=>a-b);
    let res = [];
    let l = arr.length/2;

    for(let i = 0; i < l; i++) {
        res.push(arr[i] * arr[arr.length-i-1]);
    }
    return res.reduce((a,b) => a+b,0);
}

// const minSum = arr =>
//   arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

console.log(minSum([5,4,2,3]));
