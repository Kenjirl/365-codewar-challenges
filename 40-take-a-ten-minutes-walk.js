// https://www.codewars.com/kata/54da539698b8a2ad76000228/

function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false;
    }

    let count = {
        n:0, s:0, w:0, e:0,
    };

    walk.map(e => count[e]++);

    return count.n == count.s && count.w == count.e;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));