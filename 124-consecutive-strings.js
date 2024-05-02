// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/

function longestConsec(strarr, k) {
    let n = strarr.length;
    if (n == 0 || k > n || k <= 0) {
        return '';
    }

    let res = '';
    for (let i = 0; i < (n-k+1); i++) {
        let tempStr = '';
        for (let j = 0; j < k; j++) {
            tempStr += strarr[(i+j)]
        }

        if (tempStr.length > res.length) {
            res = tempStr;
        }
    }
    return res;
}

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
        return '';
    }

    let longest = '';
    for (let i = 0; i <= strarr.length - k; i++) {
        const current = strarr.slice(i, i + k).join('');
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

console.log(
    longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2))
console.log(
    longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1))