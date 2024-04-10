// https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
    // let a = 0;
    // arr.forEach(e => {
    //     if (e>=0) {
    //         a+=e;
    //     }
    // }); 
    // return a;

    return arr.reduce((a,b)=> a + (b>0 ? b : 0),0);
}

console.log(positiveSum([1,-2,3,4,5]));