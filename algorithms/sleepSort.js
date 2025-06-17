
/**
 * Sorts an array by using the setTimeout function to delay the addition of each number to the sorted array.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} The sorted array.
 **/
export async function sleepSort(array) {
  if (array.length === 0) return array;
  const sortedArray = [];

  const promises = array.map((num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        sortedArray.push(num);
        resolve();
      }, num * 10);
    });
  });

  await Promise.all(promises);
  return sortedArray;
}
