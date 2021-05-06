/*
	Date : 2021-05-05
*/

function longestPalindrome(s: string): string {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    const oddNumPalindrom = getPalindrom(s, i, i);
    const evenNumPalindrom = getPalindrom(s, i, i + 1);
    const longest = compareLength(oddNumPalindrom, evenNumPalindrom);
    answer = compareLength(longest, answer);
  }
  return answer;
}

function getPalindrom(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }
    left--;
    right++;
  }
  return s.substring(left + 1, right);
}

function compareLength(str1: string, str2: string) {
  if (str1.length < str2.length) {
    return str2;
  } else {
    return str1;
  }
}
