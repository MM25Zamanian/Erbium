export function removeDuplicates(array: unknown[]): unknown[] {
  if (!array || !array.length) {
    return array;
  }

  return array.filter((value, index) => array.indexOf(value) === index);
}
