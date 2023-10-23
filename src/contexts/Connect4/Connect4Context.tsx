import React, { useEffect, useState } from "react";

import { Connect4ContextType, Connect4ContextProviderType } from "./types";

export const defaultConnect4Context: Connect4ContextType = {
  winner: null,
  currentPlayer: 1,
  board: [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ],
  finish: false,
  initBoard: () => {},
  play: () => {},
};

const Connect4Context = React.createContext<Connect4ContextType>(
  defaultConnect4Context
);

export const Connect4ContextProvider: React.FC<Connect4ContextProviderType> = ({
  children,
}) => {
  const initBoardValue = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ];

  const [winner, setWinner] = useState<null | number>(null);
  const [board, setBoard] =
    useState<Array<Array<number | null>>>(initBoardValue);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [finish, setFinish] = useState(false);

  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const initBoard = () => {
    setBoard(initBoardValue);
    setWinner(null);
    setFinish(false);
    setCurrentPlayer(1);
  };

  const play = (cellIndex: number) => {
    const newBoard = [...board];

    if (finish) return;

    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][cellIndex]) {
        newBoard[row][cellIndex] = currentPlayer;
        break;
      }
    }

    console.log(newBoard);
    setBoard(newBoard);
    togglePlayer();
  };

  const checkRows = () => {
    for (let row = 0; row < 3; row++) {
      for (let cell = 0; cell < 7; cell++) {
        if (board[row][cell]) {
          if (
            board[row][cell] === board[row + 1][cell] &&
            board[row][cell] === board[row + 2][cell] &&
            board[row][cell] === board[row + 3][cell]
          ) {
            return board[row][cell];
          }
        }
      }
    }
  };

  const checkColumns = () => {
    for (let row = 0; row < 6; row++) {
      for (let cell = 0; cell < 4; cell++) {
        if (board[row][cell]) {
          if (
            board[row][cell] === board[row][cell + 1] &&
            board[row][cell] === board[row][cell + 2] &&
            board[row][cell] === board[row][cell + 3]
          ) {
            return board[row][cell];
          }
        }
      }
    }

    return null;
  };

  const checkDiagonal = () => {
    for (let row = 0; row < 3; row++) {
      for (let cell = 0; cell < 4; cell++) {
        if (board[row][cell]) {
          if (
            board[row][cell] === board[row + 1][cell + 1] &&
            board[row][cell] === board[row + 2][cell + 2] &&
            board[row][cell] === board[row + 3][cell + 3]
          ) {
            return board[row][cell];
          }
        }
      }
    }

    for (let row = 0; row < 3; row++) {
      for (let cell = 3; cell < 7; cell++) {
        if (board[row][cell]) {
          if (
            board[row][cell] === board[row + 1][cell - 1] &&
            board[row][cell] === board[row + 2][cell - 2] &&
            board[row][cell] === board[row + 3][cell - 3]
          ) {
            return board[row][cell];
          }
        }
      }
    }

    return null;
  };

  const checkWin = () => {
    const result = checkRows() || checkColumns() || checkDiagonal();

    if (result) {
      setWinner(result);
      setFinish(true);
    }
  };

  useEffect(() => checkWin(), [board]);

  return (
    <Connect4Context.Provider
      value={{
        winner,
        currentPlayer,
        board,
        finish,
        initBoard,
        play,
      }}
    >
      {children}
    </Connect4Context.Provider>
  );
};

export const useConnect4Context = () => React.useContext(Connect4Context);
