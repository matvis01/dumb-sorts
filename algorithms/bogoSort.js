import { shuffle , isSorted} from "../utils.js";

/**
 * shuffles the array until it is sorted.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} The sorted array. 
 **/
export function bogoSort(array) {
  while (!isSorted(array)) {
    array = shuffle(array);
  }
  return array;
}
