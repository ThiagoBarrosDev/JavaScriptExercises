function checkPalindrome(input) {
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (!/[a-zA-Z0-9]/.test(input[l])) {
      l += 1;
    } else if (!/[a-zA-Z0-9]/.test(input[r])) {
      r -= 1;
    } else if (input[l].toLowerCase() !== input[r].toLowerCase()) {
      console.log("NO");
      return;
    } else {
      l += 1;
      r -= 1;
    }
  }
  console.log("YES");
  return;
}

checkPalindrome("race a car");
