/**
 * Removes duplicate elements from an array or duplicate characters from a string.
 * @param {Array<T>|string} input - The input array or string with possible duplicates.
 * @return {Array<T>|string} A new array or string with duplicates removed.
 */
export function removeDuplicates<T>(input: T[] | string): T[] | string {
  if (Array.isArray(input)) {
    return [...new Set(input)];
  } else if (typeof input === 'string') {
    return [...new Set(input)].join('');
  } else {
    throw new TypeError('Input must be an array or a string');
  }
}

// Example usage:
// const array = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5]

// const str = "hello world";
// console.log(removeDuplicates(str)); // Output: "helo wrd"
