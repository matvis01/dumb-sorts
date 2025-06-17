function numberToWords(n) {
  if (n === 0) return "zero";

  const ones = ["", "one", "two", "three", "four", "five",
                "six", "seven", "eight", "nine", "ten", "eleven",
                "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
                "seventeen", "eighteen", "nineteen"];

  const tens = ["", "", "twenty", "thirty", "forty", "fifty",
                "sixty", "seventy", "eighty", "ninety"];

  function chunkToWords(num) {
    let result = "";

    if (num >= 100) {
      result += ones[Math.floor(num / 100)] + " hundred";
      num %= 100;
      if (num) result += " ";
    }

    if (num >= 20) {
      result += tens[Math.floor(num / 10)];
      if (num % 10) result += "-" + ones[num % 10];
    } else if (num > 0) {
      result += ones[num];
    }

    return result;
  }

  const parts = [];
  const units = ["", "thousand", "million"];
  let unitIndex = 0;

  while (n > 0) {
    const chunk = n % 1000;
    if (chunk > 0) {
      let chunkWords = chunkToWords(chunk);
      if (units[unitIndex]) chunkWords += " " + units[unitIndex];
      parts.unshift(chunkWords);
    }
    n = Math.floor(n / 1000);
    unitIndex++;
  }

  return parts.join(" ");
}


/**
 * Sorts an array of numbers alphabetically based on their English word representation.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} The sorted array.
 */
export function alphabeticalSort(array) {
  if (array.length === 0) return array;

  const sortedArray = array.slice().sort((a, b) => {
    const aWords = numberToWords(a)
    const bWords = numberToWords(b)
    return aWords.localeCompare(bWords);
  });

  return sortedArray;
}