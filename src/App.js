import React, { useState } from 'react';
import Board from './Board';
import { NewGameButton } from './Board.style'

import './App.css';

const createBoardArray = (numberOfcolumns, numberOfrows) => {
  return new Array(numberOfcolumns).fill(0).map(el => new Array(numberOfrows).fill(0))
}


function App() {

  const numberOfcolumns = 7;
  const numberOfrows = 6;

  const [boardState, setBoardState] = useState({
    board: createBoardArray(numberOfcolumns, numberOfrows),
  })

  const [playerState, setPlayerState] = useState({
    currentPlayer: 1,
  })

  const reset = () => {
    const newboard = createBoardArray(numberOfcolumns, numberOfrows);
    setBoardState({
      board : newboard,
    })
    setPlayerState({
      currentPlayer: 1,
    })
  }

  const colSelect = (index) => {
    const board = [...boardState.board];
    const updtBoard = board.map((e, i) => {
      if (i === index) {
        return e.map((ele, ind, arr) => {
          if (ind < (arr.length - 1)) {
            if (arr[ind + 1] !== 0) {
              if (ele === 0) {
                const player = playerState.currentPlayer;
                setPlayerState({
                  currentPlayer: player === 1 ? 2 : 1,
                });
                return player;
              } else {
                return ele;
              }
            } else {
              return ele;
            }
          } else {
            if (!ele) {
              const player = playerState.currentPlayer;
              setPlayerState({
                currentPlayer: player === 1 ? 2 : 1,
              });
              return player;
            } else {
              return ele;
            }

          }
        })
      } else {
        return e;
      }
    });

    setBoardState({
      board: updtBoard,
    });

  }

  return (
    <div className="App">
      <header>
        <h1>Connect 4!!</h1>
      </header>
      <h2>Player {playerState.currentPlayer}'s turn</h2>
      <NewGameButton onClick={reset}>
        New game!!
      </NewGameButton>

      <Board board={boardState.board} player={playerState.currentPlayer} click={colSelect}></Board>
    </div>
  );
}

export default App;
