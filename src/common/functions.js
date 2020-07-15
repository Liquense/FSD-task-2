/* eslint-disable no-undef */
// jquery объявлена вебпаком
/**
 * добавляет пробелы на каждом третьем разряде числа
 * @param number форматируемое число
 * @param {string} symbol символ для вставки между триадами
 * @returns {string} итоговое число в виде строки
 */
function formatNumber(number, symbol) {
  if (Number.isNaN(number * 1)) {
    return 'not number';
  }

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

function checkDateArraysEquality(first, second) {
  if (first.length !== second.length) return false;
  return !first.some((value, index) => value.getTime() !== second[index]?.getTime());
}

/**
 * Функция для склонения русских слов
 * Пример использования: ruDeclination(5,'комментари|й|я|ев')
 *
 * @author Павел Белоусов <pafnuty10@gmail.com>
 *
 * @param      {number}  number  Число, для которого будет расчитано окончание
 * @param      {string}  words   Слово и варианты окончаний для 1|2|100
 * (1 комментарий, 2 комментария, 100 комментариев)
 * @return     {string}  Cлово с правильным окончанием
 */
function ruDeclination(number, words) {
  const w = words.split('|');
  const n = Math.abs(number); // abs на случай отрицательного значения
  const firstEndingCondition = n % 10 === 1 && n % 100 !== 11;
  const secondEndingCondition = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20);
  if (firstEndingCondition) {
    return w[0] + w[1];
  } if (secondEndingCondition) {
    return w[0] + w[2];
  }
  return w[0] + w[3];
}

/**
 * Возвращает HTML-код, включая сам объект, а не только его содержимое
 * @returns {jQuery}
 */
function outerHTML() {
  return jQuery('<div />').append(this.eq(0).clone()).html();
}
// eslint-disable-next-line no-undef
jQuery.fn.outerHTML = outerHTML;

/**
 * Копирует простые объекты (без вложенных ссылочных типов) в новый экземпляр
 * @param arrayOfObj [{}, {}...] исходный массив объектов
 * @returns {[]} новый массив объектов
 */
function copyArrayOfObjects(arrayOfObj) {
  return arrayOfObj.map((obj) => ({ ...obj }));
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export {
  clamp, copyArrayOfObjects, checkDateArraysEquality, formatNumber, ruDeclination,
};
