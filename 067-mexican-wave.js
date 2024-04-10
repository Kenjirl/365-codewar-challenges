// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/

function wave(str){
    let res = [];

    for (let i = 0; i < str.length; i++) {
        const arr = str.split('');
        if (arr[i] === ' ') {
            continue
        }
        arr.splice(i, 1, arr[i].toUpperCase());
        res.push(arr.join(''));
    }

    return res;
}

console.log(wave("two words"));
// console.log(wave("te"));