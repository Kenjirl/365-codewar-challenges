// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// function accum(s) {
    // s.split('').flatMap((e, i) => {
    //     console.log(i);
    //     let a = e.repeat(i+1).toLowerCase();
    //     let b = a.split('').flatMap((f, j) => j==0 ? f.toUpperCase() : f).join('');
        // a = a.charAt(0).toUpperCase();
    //     console.log(a);
    //     console.log(b);
    // });
	// return s;

//     return s.split('').flatMap((e, i) => {
//         return e.repeat(i+1).toLowerCase().split('').flatMap((f, j) => j==0 ? f.toUpperCase() : f).join('');
//     }).join('-');
// }

const accum = s => s.split('').flatMap((e, i) => e.repeat(i+1).toLowerCase().split('').flatMap((f, j) => j==0 ? f.toUpperCase() : f).join('')).join('-');

console.log(accum("ZpglnRxqenU"));