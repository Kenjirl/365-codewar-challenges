// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    // Return a new array with the strings filtered out
    // const regex = /^[0-9]+$/;
    // let x = [];
    // l.forEach(a => {
    //     if (a.toString().match(regex) && typeof a === 'number') {
    //         x.push(a);
    //     }
    // });
    // return x;

    return l.filter((a) => a.toString().match(/^[0-9]+$/) && typeof a === 'number');
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));

