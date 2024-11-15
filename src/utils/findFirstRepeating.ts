/**
 * Finds the first repeating element in an array or character in a string.
 * @param {Array<T>|string} input - The input array or string to search.
 * @return {T|undefined} The first repeating element/character, or undefined if none found.
 */
export function findFirstRepeating<T>(input: T[] | string): T | string | undefined {
  if (!Array.isArray(input) && typeof input !== 'string') {
    throw new TypeError('Input must be an array or a string');
  }

  const seen = new Set<T | string>();
  for (const item of input) {
    if (seen.has(item)) return item;
    seen.add(item);
  }
  return undefined;
}

// Example usage:
// console.log(findFirstRepeating([1, 2, 3, 4, 2, 5])); // Output: 2
// console.log(findFirstRepeating("abcdefd")); // Output: "d"
// console.log(findFirstRepeating([1, 2, 3, 4, 5])); // Output: undefined
