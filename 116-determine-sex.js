// https://www.codewars.com/kata/56530b444e831334c0000020/

function chromosomeCheck(sperm) {
    if (sperm === 'XY') {
        return `Congratulations! You're going to have a son`;
    } else {
        return `Congratulations! You're going to have a daughter`;
    }
    return `Congratulations! You're going to have a ` + (sperm === 'XY' ? 'son' : 'daughter')
}

console.log(
    chromosomeCheck('XY'))
console.log(
    chromosomeCheck('XX'))