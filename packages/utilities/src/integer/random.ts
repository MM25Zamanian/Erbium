export function random(min: number, max: number): number;
export function random(min: number, max: number, step: number): number;
export function random(min: number, max: number, step?: number): number {
  if (step) {
    return min + random(0, (max - min) / step) * step;
  }

  return Math.floor(Math.random() * (max - min) + min);
}
