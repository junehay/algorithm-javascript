function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  const zigzagArray: string[] = new Array(numRows).fill('');

  let direction = 'down' as 'up' | 'down';
  let index = 0;

  for (let i = 0; i < s.length; i++) {
    zigzagArray[index] += s[i];

    if (direction === 'down') {
      index++;
    }
    if (direction === 'up') {
      index--;
    }

    if (index === numRows - 1) {
      direction = 'up';
    }
    if (index === 0) {
      direction = 'down';
    }
  }

  const result = zigzagArray.join('');

  return result;
}
