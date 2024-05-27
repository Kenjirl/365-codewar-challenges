// https://www.codewars.com/kata/570597e258b58f6edc00230d/
// 26 Mei 2024

function array(string) {
    return string.split(',').length < 3 ? null : string.split(',').slice(1, -1).join(' ')
}