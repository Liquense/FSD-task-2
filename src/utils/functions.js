/**
 * добавляет пробелы на каждом третьем разряде числа
 * @param number форматируемое число
 * @param {string} symbol символ для вставки между триадами
 * @returns {string} итоговое число в виде строки
 */
function formatNumber(number, symbol) {
  if (Number.isNaN(number * 1)) { return 'NaN'; }

  const stringNum = number.toString();
  const formattedNum = [];

  for (let i = stringNum.length - 1; i >= 0; i -= 1) {
    if (((stringNum.length - i) % 3) === 0 && (stringNum.length - i) > 0) {
      formattedNum[i] = `${symbol}${stringNum[i]}`;
    } else {
      formattedNum[i] = stringNum[i];
    }
  }

  return formattedNum.join('');
}

/**
 * Функция для склонения русских слов
 * Пример использования: ruDeclination(5,'комментари|й|я|ев')
 * @author Павел Белоусов <pafnuty10@gmail.com>
 * @param      {number}  amount  Число, для которого будет расчитано окончание
 * @param      {string}  stringToDecline   Слово и варианты окончаний для 1|2|100
 * (1 комментарий, 2 комментария, 100 комментариев)
 * @return     {string}  Cлово с правильным окончанием
 */
function ruDeclination(amount, stringToDecline) {
  const words = stringToDecline.split(' ');

  return words.reduce((accumulator, word) => {
    const postfixes = word.split('|');
    const base = postfixes.shift();

    const n = Math.abs(amount);
    const firstEndingCondition = n % 10 === 1 && n % 100 !== 11;
    const secondEndingCondition = (n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 10 || n % 100 >= 20);

    if (firstEndingCondition) {
      return `${accumulator} ${base}${postfixes[0]}`;
    } if (secondEndingCondition) {
      return `${accumulator} ${base}${postfixes[1]}`;
    }
    return `${accumulator} ${base}${postfixes[2]}`;
  }, '').trim();
}

function outerHTML($element) {
  return jQuery('<div />').append($element.eq(0).clone()).html();
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getAverageNum(firstNum, secondNum) {
  return (parseFloat(firstNum) + parseFloat(secondNum)) / 2;
}

function parseAttrToDate(attrDate) {
  if (typeof attrDate !== 'string') return null;

  const dateParts = attrDate.split('.');
  const dateString = dateParts.reverse()
    .reduce((accumulator, part) => `${accumulator}-${part}`, '')
    .substring(1);

  return new Date(dateString);
}

function secondsToDays(secondsAmount) {
  return Math.round(secondsAmount / (24 * 60 * 60 * 1000));
}

export {
  clamp, formatNumber, ruDeclination, getAverageNum, outerHTML,
  parseAttrToDate, secondsToDays,
};
