import { shuffle , isSorted} from "../utils.js";

export function bogoSort(array) {
  while (!isSorted(array)) {
    array = shuffle(array);
  }
  return array;
}
