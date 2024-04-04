// https://www.codewars.com/kata/55c45be3b2079eccff00010f/

function order(words){
    let res = {};
    words.split(' ').map((e,i) => {
        e.split('').map((f,j) => {
            return Number(f) ? res[f] = e : j;
        });
    });
    return Object.values(res).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));