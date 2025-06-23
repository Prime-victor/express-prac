/**
 * Iterative Binary Search
 * @param {number[]} arr - Sorted array
 * @param {number} target - Value to find
 * @returns {number} - Index of target or -1 if not found
 */
function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

/**
 * Recursive Binary Search
 * @param {number[]} arr - Sorted array
 * @param {number} target - Value to find
 * @param {number} left - Left boundary
 * @param {number} right - Right boundary
 * @returns {number} - Index of target or -1 if not found
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  const mid = left + Math.floor((right - left) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

// Example usage:
const sortedArr = [1, 3, 5, 7, 9, 11, 15];

console.log("Iterative:", binarySearchIterative(sortedArr, 7)); // 3
console.log("Recursive:", binarySearchRecursive(sortedArr, 7)); // 3

console.log("Iterative (not found):", binarySearchIterative(sortedArr, 8)); // -1
console.log("Recursive (not found):", binarySearchRecursive(sortedArr, 8)); // -1
