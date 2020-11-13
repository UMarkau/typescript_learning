export class NumbersCollection {
  /* data: number[];
  constructor(data: number[]) {
    this.data = data;
  } */
  // Equivalent to this ^^^ see: https://www.typescriptlang.org/docs/handbook/classes.html#public-private-and-protected-modifiers
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
