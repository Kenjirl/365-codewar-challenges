// https://www.codewars.com/kata/555eded1ad94b00403000071/

function SeriesSum(n) {
    let res = 0;
    for (let i = 0; i < n; i++) {
        res = res +  1/(1+(i*3));
    }
    return res.toFixed(2);
}

console.log(SeriesSum(5))