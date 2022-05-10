const MainPrimeNumbers = [2, 3, 5, 7];

/**
 * Check Prime Number
 * @param number enter number for check
 * @returns is prime number true or false
 * @example
 * ```ts
 * console.log(isPrime(5)); // true
 * ```
 */
export function isPrime(number: number): boolean {
  if (MainPrimeNumbers.includes(number)) {
    return true;
  }
  if (number % 2 === 0) {
    return false;
  }
  if (number % 3 === 0) {
    return false;
  }
  if (number % 5 === 0) {
    return false;
  }
  const f = Math.floor;
  const s = Math.sqrt;
  const x = f(f(s(number)) / 6);

  for (let i = 1; i <= x; i++) {
    if (number % (i * 6 + 1) === 0 || number % (i * 6 + 5) === 0) {
      return false;
    }
  }
  return true;
}
