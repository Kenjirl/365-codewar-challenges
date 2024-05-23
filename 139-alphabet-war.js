// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript
// 18 Mei 2024

function alphabetWar(fight) {
    const leftSide = {'w': 4,'p': 3,'b': 2,'s': 1};
    const rightSide = {'m': 4,'q': 3,'d': 2,'z': 1};
    let res = 0;

    for (let e of fight) {
        if (rightSide[e]) {
            res += rightSide[e];
        }

        if (leftSide[e]) {
            res -= leftSide[e];
        }
    }

    if (res > 0) {
        return 'Right side wins!';
    } else if (res < 0) {
        return 'Left side wins!';
    } else {
        return "Let's fight again!";
    }
}

// function alphabetWar(fight) {
//     let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
//     let result = fight.split('').reduce((a, b) => a + (map[b] || 0), 0);
//     return result ? (result < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
// }

console.log(
    alphabetWar('z'),
    alphabetWar('zdqmwpbs'),
    alphabetWar('zzzzs'),
    alphabetWar('wwwwwwz'),
);