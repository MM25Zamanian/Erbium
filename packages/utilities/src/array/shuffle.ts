import {isEqual} from './is-equal';

export function shuffle(array: unknown[], oldValue: unknown[]): unknown[] {
  const shuffledList = array
      .map((value) => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);

  if (oldValue && isEqual(array, oldValue)) {
    return shuffle(array, oldValue);
  }

  return shuffledList;
}
