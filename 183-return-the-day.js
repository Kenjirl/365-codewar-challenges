// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/
// 16 September 2024
// 8 Kyu

function whatday(num) { 
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return 1 <= num && num <= 7 ? day[num-1] : "Wrong, please enter a number between 1 and 7";
}