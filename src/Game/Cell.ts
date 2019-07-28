import { Cell } from "./types";

export function generateCell(isAlive: boolean = Math.random() > 0.5): Cell {
  return {
    value: isAlive,
    next: (neighbours: number): Cell => {
      if ((neighbours < 2 || neighbours > 3) && isAlive) {
        return generateCell(false);
      }
      if (neighbours === 3 && !isAlive) {
        return generateCell(true);
      }
      return generateCell(isAlive);
    }
  };
}
