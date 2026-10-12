const checkLength = function(string, count) {
  if (string.length <= count) {
    return true;
  }
  return false;
};

console.log(checksLength('проверяемая строка', 20));
console.log(checksLength('проверяемая строка', 18));
console.log(checksLength('проверяемая строка', 10));


const checkPalindrome = function (string) {
  let palindromString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    palindromString += string[i];
  }
  if (string.toLowerCase().replaceAll(' ', '') === palindromString.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
};


console.log(checkPalindrome('топот'));
console.log(checkPalindrome('ДовОд'));
console.log(checkPalindrome('Кекс'));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));

let extractNumber = function (input) {
  let str = input.toString();
  let resultString = '';
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let parsedChar = parseInt(currentChar, 10);
    if (!Number.isNaN(parsedChar)) {
      resultString += currentChar;
    }
  }
  if (resultString === '') {
    return NaN;
  }
  return parseInt(resultString, 10);
};

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
