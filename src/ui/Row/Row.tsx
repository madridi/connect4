import React from "react";
import { Cell } from "../Cell/Cell";

import styles from './Row.module.css';

type RowPropsType = {
  row: Array<number | null>;
  play: (index: number) => void;
};

export const Row: React.FC<RowPropsType> = ({ row, play }) => {
  return (
    <tr className={styles.row}>
      {row.map((cell, i) => (
        <Cell key={i} value={cell} index={i} play={play} />
      ))}
    </tr>
  );
};
