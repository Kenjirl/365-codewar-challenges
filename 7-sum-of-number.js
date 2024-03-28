function getSum(a, b){
    let y = a<b?a:b;
    let z = a<b?b:a;

    if (a != b) {
        for (let i = y+1; i <= z; i++) {
            y+=i;
        }
    }
    return y;
}

console.log(getSum(0,-1));
console.log(getSum(0, 1));
console.log(getSum(5,-1));

// Not finished yet.