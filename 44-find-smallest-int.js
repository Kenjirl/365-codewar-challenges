// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((e,i) => e-i)[0];
        // return Math.min(...args)
    }
}

const sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]));