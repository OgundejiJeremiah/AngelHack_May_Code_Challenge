function find_minimum_deletion(l, r, dp, s) {
  if (l > r) {
    return 0;
  }
  if (l === r) {
    return 1;
  }
  if (dp[l][r] !== -1) {
    return dp[l][r];
  }

  // When a single character is deleted
  let res = 1 + find_minimum_deletion(l + 1, r, dp, s);

  // When a group of consecutive characters
  // are deleted if any of them matches
  for (let i = l + 1; i <= r; i++) {
    // When both the characters are same then
    // delete the letters in between them
    if (s[l] === s[i]) {
      res = Math.min(
        res,
        find_minimum_deletion(l + 1, i - 1, dp, s) +
          find_minimum_deletion(i, r, dp, s)
      );
    }
  }

  // Memoize
  dp[l][r] = res;
  return res;
}

// Driver code
const s =
  "kjslaqpwoereeeeewwwefifjdksjdfhjdksdjfkdfdlddkjdjfjfjfjjjjfjffnefhkjgefkgjefkjgkefjekihutrieruhigtefhgbjkkkknbmssdsdsfdvneurghiueor";
const n = s.length;
const N = 200;
const dp = Array.from({ length: N }, () => Array(N).fill(-1));
console.log(find_minimum_deletion(0, n - 1, dp, s));