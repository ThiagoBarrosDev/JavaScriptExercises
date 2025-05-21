/**
 * Function that traverses a string and returns an array where:
 * - true for alphanumeric characters
 * - false for non-alphanumeric characters
 * @param {string} str - The input string
 * @return {boolean[]} - Array of boolean values
 */
function checkAlphanumeric(str) {
  const result = [];
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (!result.push(/[a-zA-Z0-9]/.test(str[l]))) {
      l++;
    } else if (!result.push(/[a-zA-Z0-9]/.test(str[r]))) {
      r--;
    } else if (str[l].toLowerCase() !== str[r].toLowerCase()) {
      return false;
    } else {
      l++;
      r--;
    }
    return true;
  }

  return result;
}

// Example usage
const testStr = "aa  v s  aa";
const result = checkAlphanumeric(testStr);
console.log(result);
