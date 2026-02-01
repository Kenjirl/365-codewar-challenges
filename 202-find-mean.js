function findAverage(nums) {
    return nums.reduce((acc,cur) => acc + cur, 0)/nums.length;
}

// const findAverage = (nums) => nums.reduce((acc,cur) => acc + cur, 0)/nums.length;

console.log(
    findAverage([1]))
console.log(
    findAverage([1,3,5,7]))