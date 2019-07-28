import {estimateCells, print, nextGeneration} from "./Game.helpers";
import {Buffer as IBuffer, Board} from "./types";
import {Buffer} from "./Buffer";
import createBoard from "./Board";

function Game(numberOfGenerations: number = 50) {
  console.debug('Creating a Game instance.')
  this.maxGenerations = numberOfGenerations;
  this.initalizeBoard = function () {
    const size = window.innerWidth > window.innerHeight
      ? window.innerWidth
      : window.innerHeight;
    return createBoard(
      estimateCells(size/2),
      estimateCells(size/2)
    );
  };
  this.fillBuffer = async function fillBuffer(buffer: IBuffer, nextBoard: Board) {
    const {done, value} = await buffer.next(nextBoard);
    return done ? value : await fillBuffer(buffer, nextGeneration(nextBoard));
  };
}

Game.prototype.run = function (board = this.initalizeBoard()) {
  console.debug('Running game.');
  this.fillBuffer(
    new Buffer(this.maxGenerations),
    board
  ).then((bufferedBoards) => {
    console.debug('Buffer filled.');
    bufferedBoards.forEach((b, i) => setTimeout(() => {
      print(b)
      if (i === bufferedBoards.length - 1) {
        this.run(bufferedBoards[bufferedBoards.length - 1])
      }
    }, 200 * i));
  }).catch(e => console.error('Error running the game: ', e.toString()));
};

export default Game;
