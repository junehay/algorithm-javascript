function threeSum(nums: number[]): number[][] {
  const results: string[] = [];
  nums.sort((a, b) => a - b);

  nums.forEach((num, index) => {
    let startIndex = index + 1;
    let endIndex = nums.length - 1;
    while (startIndex < endIndex) {
      const start = nums[startIndex];
      const end = nums[endIndex];
      const formula = num + start + end;
      if (formula === 0) {
        const stringArray = JSON.stringify([num, start, end]);
        if (!results.includes(stringArray)) {
          results.push(stringArray);
        }
        startIndex++;
      }
      if (formula > 0) {
        endIndex--;
      }
      if (formula < 0) {
        startIndex++;
      }
    }
  });

  return results.map((v) => JSON.parse(v));
}
