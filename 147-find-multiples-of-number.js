// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/
// 26 Mei 2024

const findMultiples = (integer, limit) => Array.from({length: Math.floor(limit / integer)}, (_, i) => (i + 1) * integer);
