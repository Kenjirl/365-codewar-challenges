// https://www.codewars.com/kata/5202ef17a402dd033c000009/
// 7 September 2024

function titleCase(title, minorWords) {
    let minorWordsList = minorWords ? minorWords.toLowerCase().split(' ') : [];
    return title
        .toLowerCase()
        .split(' ')
        .map((word, index) => {
            if (index === 0 || !minorWordsList.includes(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        })
        .join(' ');
}

console.log(
    titleCase(''));
console.log(
    titleCase('a clash of KINGS', 'a an the of'));
console.log(
    titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(
    titleCase('the quick brown fox'));