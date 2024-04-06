// https://www.codewars.com/kata/54ff3102c1bad923760001f3/

function getCount(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    str.split('').map(e => {
        if (vowel.includes(e)) {
            count++;
        }
    })
    return count;
}

console.log(getCount('abracadabra'))