// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/
// 9 September 2024

function chooseBestSum(t, k, ls) {
  // Helper function to generate combinations of k towns
    function combinations(arr, k) {
        if (k === 0) return [[]];
        if (arr.length === 0) return [];
        const [first, ...rest] = arr;
        const withFirst = combinations(rest, k - 1).map(combo => [first, ...combo]);
        const withoutFirst = combinations(rest, k);
        return [...withFirst, ...withoutFirst];
    }

    // Get all combinations of k towns
    const combs = combinations(ls, k);

    // Filter combinations that have a sum less than or equal to t
    const validSums = combs
        .map(combo => combo.reduce((sum, dist) => sum + dist, 0))
        .filter(sum => sum <= t);

    // Return the maximum valid sum or null if none are valid
    return validSums.length > 0 ? Math.max(...validSums) : null;
}
