# Dumb Sorts

A collection of inefficient and absurd sorting algorithms that nobody should ever use.

## Installation

```bash
npm install dumb-sorts
```

## Usage

```javascript
import { bogoSort, stalinSort, sleepSort } from 'dumb-sorts';

const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6];

// Synchronous sorts
const bogoSorted = bogoSort(unsortedArray);
const stalinSorted = stalinSort(unsortedArray);

// Asynchronous sorts
const sleepSorted = await sleepSort(unsortedArray);
```

## Available Algorithms

### Synchronous Sorts

#### Bogo Sort
Randomly shuffles the array until it happens to be sorted. Average time complexity: O(n * n!).

```javascript
const sorted = bogoSort([3, 1, 4, 1, 5]);
```

#### Bozo Sort
Like Bogo Sort but only swaps two random elements at a time.

```javascript
const sorted = bozoSort([3, 1, 4, 1, 5]);
```

#### Stalin Sort
Removes any element that is smaller than the previous one. The result is technically sorted.
```javascript
const sorted = stalinSort([1, 5, 2, 7, 3, 9]);
```

#### Alphabetical Sort
Converts numbers to strings and sorts them alphabetically.

```javascript
const sorted = alphabeticalSort([1, 10, 2, 20]);
```

#### Permutation Sort
Generates every possible permutation of the array until it finds the sorted one. Time complexity: O(n!). 

```javascript
const sorted = permutationSort([3, 1, 2]);
```

### Asynchronous Sorts

#### Sleep Sort
Each number waits for a time proportional to its value, then adds itself to the result.

```javascript
const sorted = await sleepSort([3, 1, 4, 1, 5]);
```

#### Gemini Sort
Uses Google's Gemini AI to sort your array.

```javascript
const sorted = await geminiSort([3, 1, 4], 'your-api-key');
```

## Performance Comparison

| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| Bogo Sort | O(n) | O(n × n!) | O(∞) | O(1) |
| Bozo Sort | O(n) | O(n × n!) | O(∞) | O(1) |
| Stalin Sort | O(n) | O(n) | O(n) | O(n) |
| Alphabetical Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Permutation Sort | O(n × n!) | O(n × n!) | O(n × n!) | O(n!) |
| Sleep Sort | O(max(array)) | O(max(array)) | O(max(array)) | O(n) |
| Gemini Sort | O(HTTP) | O(HTTP + AI) | O(API limit) | O(internet) |

## Why Would You Use This?

You probably shouldn't.