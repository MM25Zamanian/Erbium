export function isEqual(array1: unknown[], array2: unknown[]): boolean {
  if (!array1 || !array2 || !array1.length || !array2.length || array1.length !== array2.length) {
    return false;
  }

  const _isEqual = array1
      .map((value, index) => value === array2[index])
      .reduce((previousValue, currentValue) => previousValue && currentValue);

  return array1 === array2 || _isEqual;
}
