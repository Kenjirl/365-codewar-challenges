// https://www.codewars.com/kata/55a996e0e8520afab9000055/
// 21 September 2024
//  8 Kyu

function cookie(x){
    return 'Who ate the last cookie? It was '
        + (x === ''+x ? 'Zach!'
        : x === +x ? 'Monica!'
        : 'the dog!');
}
