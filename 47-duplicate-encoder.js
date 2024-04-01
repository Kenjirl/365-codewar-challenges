// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

function duplicateEncode(word){
    let res = '';
    let arr = word.toLowerCase().split('');

    for (let i = 0; i < arr.length; i++) {
        let skip = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j == i) {
                continue;
            }

            if (arr[i] === arr[j]) {
                res += ')';
                skip++;
                break;
            }
        }
        if (skip === 0) {
            res += '(';
        }
    }
    return res;

    // return word
    //     .toLowerCase()
    //     .split('')
    //     .map( function (a, i, w) {
    //         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    //     })
    //     .join('');
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));