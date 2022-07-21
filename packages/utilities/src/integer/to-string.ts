export function toString(
    numberToFormat: number | string,
    lang?: string,
    options?: Intl.NumberFormatOptions,
): string {
  numberToFormat = Number(numberToFormat);

  if (isNaN(numberToFormat)) {
    return '';
  }

  return new Intl.NumberFormat(
      lang ?? (document.documentElement.lang || navigator.language),
      options,
  ).format(numberToFormat);
}
