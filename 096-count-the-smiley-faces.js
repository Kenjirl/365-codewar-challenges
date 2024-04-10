// https://www.codewars.com/kata/583203e6eb35d7980400002a/

function countSmileys(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace(';', ':')
                        .replace('~', '-')
                        .replace('D', ')');

        if (arr[i].split('-').length > 2) {
            continue;
        }

        arr[i] = arr[i].replaceAll('-', '');

        if (arr[i] === ':)' ) {
            count++;
        }
    };
    return count;

    // Filter option
    // eyes  --> [:;]
    // nose  --> [-~]? (conditional)
    // mouth --> [)D]
    // return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([';D']))
console.log(countSmileys([';-D']))
console.log(countSmileys([';--D']))
console.log(countSmileys([';D', ':-(', ':-)', ';~)']))