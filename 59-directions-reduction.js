// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] === 'NORTH' && arr[i+1] === 'SOUTH' ||
            arr[i] === 'SOUTH' && arr[i+1] === 'NORTH' ||
            arr[i] === 'WEST' && arr[i+1] === 'EAST' ||
            arr[i] === 'EAST' && arr[i+1] === 'WEST'
        ) {
            arr[i] = '';
            arr[i+1] = '';
            arr = arr.filter(e => e!=='');
            i = -1;
        }
    }
    return arr;

    // var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
	// return arr.reduce(function (a, b, i) {
    //     opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    //     return a
    // }, [])
}

console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(
    dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(
    dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
console.log(
    dirReduc(["EAST","","","NORTH","","","EAST","SOUTH","NORTH","WEST"]));