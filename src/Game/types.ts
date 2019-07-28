export type Cell = {
  value: boolean;
  next: (neigbours: number) => Cell;
};

export type Board = Cell[][];

export interface Buffer {
  next: <T>(x: T) => { done: boolean; value?: T[] };
}
