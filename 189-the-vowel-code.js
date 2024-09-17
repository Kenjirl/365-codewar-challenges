// https://www.codewars.com/kata/53697be005f803751e0015aa/
// 18 September 2024
// 6 Kyu

function encode(string) {
    string = string
        .replaceAll('a', '1')
        .replaceAll('e', '2')
        .replaceAll('i', '3')
        .replaceAll('o', '4')
        .replaceAll('u', '5');

    return string;

    // return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

function decode(string) {
    string = string
        .replaceAll('1', 'a')
        .replaceAll('2', 'e')
        .replaceAll('3', 'i')
        .replaceAll('4', 'o')
        .replaceAll('5', 'u');

    return string;

    // return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}
