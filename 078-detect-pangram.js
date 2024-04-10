// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/

function isPangram(string){
    string = string.toLowerCase()
                    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
                    .replaceAll(' ', '')
                    .replace(/\d+/g, '')
                    .split('');
    let arr = [];
    string.map(e => {
        if (!arr.includes(e)) {
            arr.push(e);
        }
    });
    return arr.length === 26;
}

// function isPangram(string){
//     return 'abcdefghijklmnopqrstuvwxyz'
//         .split('')
//         .every((x) => string.toLowerCase().includes(x));
// }

console.log(isPangram("The quick brown fox jumps over the lazy dog9."))
console.log(isPangram("This is not a pangram."))