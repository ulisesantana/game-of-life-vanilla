export interface ICounter{
  valueOf(): number,
  inc(): void,
  dec(): void
  reset(): void
}

export function Counter(start = 0){
  this.startValue = start;
  this.counter = start;
}

Counter.prototype.valueOf = function(){return this.counter};
Counter.prototype.inc = function(){this.counter = this.counter + 1};
Counter.prototype.dec = function(){this.counter = this.counter - 1};
Counter.prototype.reset = function(){this.counter = this.startValue};