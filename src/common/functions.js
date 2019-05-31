export function formatNumber(number, symbol) { //добавляет пробелы на каждом третьем разряде числа
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

export function compareDateArrays(first, second) {
    let result = true;

    if (first.length !== second.length) return false;

    for (let i = 0; i < first.length; i++) {
        if (first[i].getTime() !== second[i].getTime()) {
            result = false;
            break;
        }
    }

    return result;
}
