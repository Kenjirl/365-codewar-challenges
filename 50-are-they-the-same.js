// https://www.codewars.com/kata/550498447451fbbd7600041c/

function comp(array1, array2){
    return array1 != null && array2 != null ? 
        array1.
            sort()
            .join('') 
            === 
        array2.map(e => Math.sqrt(e))
            .sort()
            .join('') 
        : false;

    // return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

console.log(comp(
    null, 
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
    ));