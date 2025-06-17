import { isSorted } from '../utils.js';

/** 
 * Generates all permutations of the array and returns the first sorted permutation.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} The first sorted permutation of the array
 */
export function permutationSort(array) {
  if (array.length === 0) return array;

  const permutations = [];
  
  function generatePermutations(arr, current = []) {
    if (arr.length === 0) {
      permutations.push(current);
      return;
    }
    
    for (let i = 0; i < arr.length; i++) {
      const nextArr = arr.slice(0, i).concat(arr.slice(i + 1));
      generatePermutations(nextArr, current.concat(arr[i]));
    }
  }

  generatePermutations(array);
  
  for (const perm of permutations) {
    if (isSorted(perm)) {
      return perm;
    }
  }

  return array;
}