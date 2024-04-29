// https://www.codewars.com/kata/59cfc000aeb2844d16000075/

function capitalize(s){
    let res = ['', ''];
    let array = s.split('');

    for (let i = 0; i < array.length; i++) {
        if (i%2 === 0) {
            res[0] += array[i].toUpperCase();
            res[1] += array[i].toLowerCase();
        } else {
            res[0] += array[i].toLowerCase();
            res[1] += array[i].toUpperCase();
        }
    }

    return res;
};

console.log(capitalize('abcdef'))