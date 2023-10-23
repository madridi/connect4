import React from "react";

import styles from "./Cell.module.css";

type CellPropsType = {
    value: number | null;
    index : number
    play: (index: number) => void
}

export const Cell: React.FC<CellPropsType> = ({ value, index, play }) => {
  return (
    <td>
      <div
        className={styles.cell}
        onClick={() => {
          play(index);
        }}
      >
        {value ? <>{value === 1 ? 'O' : 'x'}</> : null }
      </div>
    </td>
  );
};
