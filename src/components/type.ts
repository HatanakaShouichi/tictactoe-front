// interface.ts
export type SquareValue = "X" | "O" | null;
export interface History {
  squares: SquareValue[];
  location: {
    col: number;
    row: number;
  };
}
