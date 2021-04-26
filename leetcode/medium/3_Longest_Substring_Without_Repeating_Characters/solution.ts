/*
	Date : 2021-04-15
*/

function lengthOfLongestSubstring(s: string): number {
  let first = 0;
  let answer = 0;
  s.split('').reduce((acc, cur, i) => {
    const index = acc.indexOf(cur);
    if (index === -1) {
      acc = s.substring(first, i + 1);
    } else {
      acc = s.substring(first + index + 1, i + 1);
      first = first + index + 1;
    }

    answer = acc.length > answer ? acc.length : answer;

    return acc;
  }, '');

  return answer;
}
