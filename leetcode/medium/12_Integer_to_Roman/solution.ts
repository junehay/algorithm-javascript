function intToRoman(num: number): string {
  const intToRomanMap = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]);
  let romanAnswer = '';

  intToRomanMap.forEach((roman, int) => {
    while (num - int >= 0) {
      num = num - int;
      romanAnswer += roman;
    }
  });

  return romanAnswer;
}
