// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/

function likes(names) {
    if (!names.length) return 'no one likes this';

    let res = names[0]
    for (let i = 1; i < names.length; i++) {
        if (i !== names.length - 1) {
            res = res + ', ' + names[i]
        } else {
            res = res + ' and ' + names[i]
        }

        if (names.length > 3) {
            res += ' and ' + (names.length-2) + ' others'
            break;
        }
    }

    if (names.length === 1) {
        res += ' likes this';
    } else {
        res += ' like this';
    }

    return res;
}

console.log(likes([]))
console.log(likes(['Peter']))
console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))