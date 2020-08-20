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
 * @param      {number}  number  Число, для которого будет расчитано окончание
 * @param      {string}  words   Слово и варианты окончаний для 1|2|100
 * (1 комментарий, 2 комментария, 100 комментариев)
 * @return     {string}  Cлово с правильным окончанием
 */
function ruDeclination(number, words) {
  const w = words.split('|');
  const n = Math.abs(number);
  const firstEndingCondition = n % 10 === 1 && n % 100 !== 11;
  const secondEndingCondition = (n % 10 >= 2 && n % 10 <= 4) && (n % 100 < 10 || n % 100 >= 20);
  if (firstEndingCondition) {
    return w[0] + w[1];
  } if (secondEndingCondition) {
    return w[0] + w[2];
  }
  return w[0] + w[3];
}

function outerHTML($element) { return jQuery('<div />').append($element.eq(0).clone()).html(); }

function clamp(value, min, max) { return Math.min(Math.max(value, min), max); }

function getAverageNum(firstNum, secondNum) { return (firstNum + secondNum) / 2; }

function eventPreventDefault(event) { event.preventDefault(); }

function parseAttrToDate(attrDate) {
  const dateParts = attrDate.split('.');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  const dateString = `${year}-${month}-${day}`;

  return new Date(dateString);
}

export {
  clamp, formatNumber, ruDeclination, getAverageNum, eventPreventDefault, outerHTML,
  parseAttrToDate,
};
