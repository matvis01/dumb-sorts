export function stalinSort(array) {
  if (array.length === 0) return array;

  const result = [array[0]];

  for (let i = 1; i < array.length; i++) {
    if (array[i] >= result[result.length - 1]) {
      result.push(array[i]);
    }
  }

  return result;
}