// https://www.codewars.com/kata/54dc6f5a224c26032800005c/

function stockList(L, M) {
    if (L.length === 0 || M.length === 0) {
        return "";
    }

    let categorySums = {};

    L.forEach(entry => {
        let [code, quantity] = entry.split(" ");
        let category = code[0];
        if (M.includes(category)) {
            categorySums[category] = (categorySums[category] || 0) + parseInt(quantity);
        }
    });

    return M.map(category => `(${category} : ${categorySums[category] || 0})`).join(" - ");
}

const asd = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const dfg = ["A", "B", "C", "D"];

console.log(stockList(asd, dfg));