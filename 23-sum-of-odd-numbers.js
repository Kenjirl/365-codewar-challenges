// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/

function rowSumOddNumbers(n) {
    // let x = 1;
    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < i; j++) {
    //         x += 2;
    //     }
    // }
	// return Array.from({length:n}).fill(0).map((a,b) => x+(2*b)).reduce((c,d) => c+d);

    return n ** 3;
}

console.log(rowSumOddNumbers(5));