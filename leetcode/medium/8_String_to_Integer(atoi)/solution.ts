function myAtoi(s: string): number {
  const int = parseInt(s);
  return isNaN(int) ? 0 : Int32bit(int);
}

function Int32bit(num: number): number {
  const maxInt = Math.pow(2, 31) - 1;
  const minInt = Math.pow(-2, 31);
  if (num > maxInt) {
    return maxInt;
  }
  if (num < minInt) {
    return minInt;
  }
  return num;
}
