import {Board, Cell} from './types';
import Led from './Led'

const getCell = (b: Board, x: number, y: number): boolean => {
  x = x >= b.length ? 0 : x < 0 ? b.length - 1 : x;
  y = y >= b[0].length ? 0 : y < 0 ? b[0].length - 1 : y;
  return b[x][y].value;
};

const getNeighbours = (b: Board, x: number, y: number): number =>
  [-1, 0, 1]
    .map(n => [
      getCell(b, x + n, y - 1),
      n === 0 ? false : getCell(b, x + n, y),
      getCell(b, x + n, y + 1)
    ])
    .reduce((acc, n) => [...acc, ...n], [])
    .filter(n => !!n).length;

export const nextGeneration = (b: Board): Board =>
  b.map((row: Cell[], x) =>
    row.map((c: Cell, y) => c.next(getNeighbours(b, x, y)))
  );

export const estimateCells = (x: number) => Math.ceil(x / 20);

export const print = (board: Board) => {
  console.debug("PRINTING", new Date().toISOString());
  const boardHTML = `
  ${board
    .map(row => `<div class="row">
    ${row.map(cell => Led(cell.value)).join('')}
    </div>`
    )
    .join('')}
`;
  document.getElementById("app").innerHTML = `
    <div>
      ${boardHTML} 
    </div> 
     <div>
      ${boardHTML} 
    </div> 
      <div>
      ${boardHTML} 
    </div> 
      <div>
      ${boardHTML} 
    </div> 
  `;
};
