// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = n => {
    let a=[];
    for (let i = n; i > 0; i--) {
        a.push(i);
    }
    return a;

    // return Array(n).fill(0).map((e, i) => n - i );
};

console.log(reverseSeq(5));