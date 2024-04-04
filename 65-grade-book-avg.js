// https://www.codewars.com/kata/55cbd4ba903825f7970000f5

function getGrade (s1, s2, s3) {
    let avg = (s1+s2+s3) / 3;
    if (avg >= 90) {
        return 'A'
    } else if (avg >= 80) {
        return 'B'
    } else if (avg >= 70) {
        return 'C'
    } else if (avg >= 60) {
        return 'D'
    }
    return 'F'
}

console.log(getGrade(95,90,93));
console.log(getGrade(84,79,85));
console.log(getGrade(60,82,76));