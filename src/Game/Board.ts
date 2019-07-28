import {Board} from './types';
import {generateCell} from './Cell'

const createBoard = (rows: number, columns: number): Board =>
  Array.apply(null, new Array(rows)).map(_ =>
    Array.apply(null, new Array(columns)).map(_ => generateCell())
  );

export default createBoard;