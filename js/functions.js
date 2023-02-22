// Первая задачка

const checkStringLength = (string, maxLength) => {
  if (string.maxLength <= maxLength) {
    return true
  } else {
    return false
  }
}

checkStringLength('проверяемая строка', 20)

/*
Рефакторинг-1:

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);

Рефакторинг-2:

const checkStringLength = (string, maxLength) => String(string).length <= maxLength;

checkStringLength('проверяемая строка', 20);

Вариант ии:

function checkStringLength(str, maxLength) {
  return String(str).length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
*/

// Вторая задачка

const isPalindrom = (string) => {
  const newString = string
    .toLowerCase()
    .replaceAll(' ', '')

  let reverseString = ''
  for (let i = newString.length - 1; i >= 0; i = i - 1) {
    reverseString = reverseString + newString.at(i)
  }
  return newString === reverseString
}

isPalindrom('Лёша на полке клопа нашёл ')

/*

Рефакторинг-1:

const isPalindrom = (string) => {//объявляем функцию, которая принимает один параметр
  const newString = string
    .toLowerCase()//приводим к нижнему регистру
    .replaceAll(' ', '');//выполняет замену с 'пробел' на '' - пустота)

    return newString === newString.split('').reverse().join('');//нашу строку newString приводим к массиву, разворачиваем, склеиваем
}

Вариант ии:

function isPolindrome(str) {
  const newStr = str.replace(/\s/g, '').toLowerCase();
  const reverseStr = newStr.split('').reverse().join('');
  return newStr === reverseStr;
}

isPolindrome('Лёша на полке клопа нашёл ');

*/

// Третья задачка

const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string
  }
  let result = ''
  for (let i = 0; i < string.length; i = i + 1) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result = result + string.at(i)
    }
  }
  return parseInt(result, 10)
}

extractNumber('1 кефир, 0.5 батона')

/*

Вариант ии:

function extractNumber(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 48 && charCode <= 57) {
      result += str[i];
    }
  }
  return result ? parseInt(result, 10) : NaN;
}

extractNumber('ECMAScript 2022');

*/

// Четвертая задачка

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length

  if (actualPad <= 0) {
    return string
  }

  const tempPad = pad.slice(0, actualPad % pad.length)

  const tempRepeat = pad.repeat(actualPad / pad.length)

  return tempPad + tempRepeat + string
}

myPadStart('q', 4, 'we')

/*

Вариант ии:

function addChars(str, minLength, chars) {
  if (str.length >= minLength) {
    return str;
  }
  const charsToAdd = chars.slice(-minLength + str.length);
  return charsToAdd + str;
}

addChars('1', 2, '0');

*/
