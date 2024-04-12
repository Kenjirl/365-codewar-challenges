// https://www.codewars.com/kata/55ecd718f46fba02e5000029/

function between(a, b) {
    return Array.from({length:(b-a+1)}, (e,i) => e=a+i);
}
