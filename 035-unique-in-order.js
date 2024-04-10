// https://www.codewars.com/kata/54e6533c92449cc251001667/

var uniqueInOrder=function(iterable){
    if (typeof iterable == "string") {
        iterable = iterable.split('');
    }

    // let res = [];

    // for (let i = 0; i < iterable.length; i++) {
    //     if (iterable[i] !== iterable[i + 1]) {
    //         res.push(iterable[i]);
    //     }
    // }

    // iterable.map((e,i) => iterable[i] !== iterable[i + 1] ? res.push(iterable[i]) : );
    // return res;

    return iterable.filter((e, i) => e !== iterable[i + 1])
    
    // return [...iterable].filter((e, i) => e !== iterable[i + 1])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));