export function formatNumber(number, symbol) {
    let stringNum = number.toString();
    let formattedNum = [];

    for (let i = stringNum.length - 1; i >= 0; i--) {
        if (((stringNum.length - i) % 3) === 0 && (stringNum.length - i) > 0) {
            formattedNum[i] = `${symbol}${stringNum[i]}`;
        }
        else {
            formattedNum[i] = stringNum[i];
        }
    }

    return formattedNum.join("");
}
