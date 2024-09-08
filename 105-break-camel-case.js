// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    // if (string === '') return string;
    // let array = string.split('');
    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] === array[i].toUpperCase()) {
    //         array.splice(i,0,' ');
    //         i++;
    //     }
    // }
    // return array.join('');

    return string === '' ? '' : 
        string.split('').map((e,i) => {
            if (e === e.toUpperCase()) {
                e = ` ${e}`;
                i++;
            }
            return e
        }).join('');

    // return(string.replace(/([A-Z])/g, ' $1'));
}

console.log(solution('camelCasing'))
console.log(solution('identifier'))
console.log(solution(''))