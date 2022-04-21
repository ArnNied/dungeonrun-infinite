export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function getRandomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

export function getRandomFloat(min: number, max: number): number {
  return getRandomInteger(min, max * 100) / 100
}

export function rng(value?: number): boolean | number {
  if(value) {
    return Math.random() <= value
  } else {
    return Math.random()
  }
}

export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)]
}