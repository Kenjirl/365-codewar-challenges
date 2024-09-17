// https://www.codewars.com/kata/52efefcbcdf57161d4000091/
// 18 September 2024
// 6 Kyu

function count(string) {
    const res = {};

    for (let s of string) {
        res[s] = (res[s] || 0) + 1;
    }

    return res;
}

console.log(
    count('aba'))
