function checkLength(string, count) {
  if (string.length <= count) {
    return true;
  }
  return false;
};

function checkPalindrome(string) {
  let palindromString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    palindromString += string[i];
  }
  if (string.toLowerCase().replaceAll(' ', '') === palindromString.toLowerCase().replaceAll(' ', '')) {
    return true;
  }
  return false;
};

function extractNumber(input) {
  const str = input.toString();
  let resultString = '';
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const parsedChar = parseInt(currentChar, 10);
    if (!Number.isNaN(parsedChar)) {
      resultString += currentChar;
    }
  }
  if (resultString === '') {
    return NaN;
  }
  return parseInt(resultString, 10);
};
