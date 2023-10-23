import React from "react";

import { Arraw } from "../../../ui/Arraw/Arraw";

import { useConnect4Context } from "../../../contexts/Connect4/Connect4Context";

export const Players: React.FC = ({}) => {
  const { currentPlayer } = useConnect4Context();

  return (
    <section>
      <div>
        {currentPlayer === 1 && <Arraw />} Player 1 O
      </div>
      <div>
          {currentPlayer === 2 && <Arraw />} Player 2 x
      </div>
    </section>
  );
};
