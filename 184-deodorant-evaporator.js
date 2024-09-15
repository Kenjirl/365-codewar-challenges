// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/
// 16 September 2024
// 7 Kyu

function evaporator(content, evap_per_day, threshold) {
    let percentage = 100;
    let days = 0;

    while (percentage > threshold) {
        percentage -= percentage * (evap_per_day / 100);
        days++;
    }

    return days;
}
