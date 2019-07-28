import { Counter } from "./Counter";

export function Buffer(size = 10) {
  this.buffer = [];
  this.size = size;
  this.counter = new Counter(1);
}

Buffer.prototype.next = async function iterate(x: any) {
  this.buffer = this.buffer.concat([x]);
  if (this.counter.valueOf() < this.size) {
    this.counter.inc();
    return { done: false };
  } else {
    this.counter.reset();
    return { done: true, value: [...this.buffer] };
  }
};
