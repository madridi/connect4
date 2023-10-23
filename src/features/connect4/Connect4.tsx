import React from "react";

import { Players } from "./Players/Players";
import { Board } from "./Board/Board";
import { useConnect4Context } from "../../contexts/Connect4/Connect4Context";

import styles from "./Connect4.module.css";

export const Connect4: React.FC = ({}) => {
const {winner, initBoard} = useConnect4Context();

  return (
    <section>
      <header className={styles.header}>
        {winner && (
          <>
            <p className={styles.message}> the winner is {winner}</p>
            <div className={styles.button} onClick={() => initBoard()}>
              New Game
            </div>
          </>
        )}
      </header>
      <div className={styles.container}>
        <Board />
        <Players />
      </div>
    </section>
  );
};
