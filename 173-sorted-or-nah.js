// https://www.codewars.com/kata/580a4734d6df748060000045/
// 16 September 2024
// 7 Kyu

function isSortedAndHow(array) {
    let x = array.length;
    return array[0] < array[1] && array[x-2] < array[x-1] ? "yes, ascending"
        : array[0] > array[1] && array[x-2] > array[x-1] ? "yes, descending"
        : "no";
}
