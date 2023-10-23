import React, { useState } from "react";

import { Row } from "../../../ui/Row/Row";

import { useConnect4Context } from "../../../contexts/Connect4/Connect4Context";

import styles from "./Board.module.css";

export const Board: React.FC = ({}) => {
  const { board, play } = useConnect4Context();

  return (
    <table className={styles.table}>
      <tbody>
        {board.map((row, i) => (
          <Row key={i} row={row} play={play} />
        ))}
      </tbody>
    </table>
  );
};
