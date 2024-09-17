// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/
// 18 September 2024
// 6 Kyu

function queueTime(customers, n) {
    if (customers.length === 0) return 0;

    let tills = Array(n).fill(0);

    for (let time of customers) {
        tills[0] += time;
        tills.sort((a, b) => a - b);
    }

    return Math.max(...tills);
}
