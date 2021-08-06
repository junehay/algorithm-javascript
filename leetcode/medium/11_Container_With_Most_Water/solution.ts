function maxArea(height: number[]): number {
  let maxAmount = 0;
  let startIndex = 0;
  let endIndex = height.length - 1;

  while (startIndex <= endIndex) {
    const start = height[startIndex];
    const end = height[endIndex];
    const amount = Math.min(start, end) * (endIndex - startIndex);
    if (maxAmount < amount) {
      maxAmount = amount;
    }
    start < end ? startIndex++ : endIndex--;
  }

  return maxAmount;
}
