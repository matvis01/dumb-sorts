import { isSorted } from '../utils.js';

export function bozoSort(array) {
  if (array.length === 0) return array;

  while (!isSorted(array)) {
    const i = Math.floor(Math.random() * array.length);
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}