export type Connect4ContextType = {
  winner: number | null;
  currentPlayer: number;
  board: Array<Array<number | null>>;
  finish: boolean;
  initBoard: () => void;
  play: (cellIndex: number) => void
};

export type Connect4ContextProviderType = {
  children: React.ReactNode;
};