import React from "react";
import { SquareValue } from "./type";
import { Square } from "./Square";
/**
 * Board Interface
 */
interface BoardProps {
  squares: SquareValue[];
  onClick: (i: number) => void;
  winLine: number[];
}

/**
 * Boardコンポーネント
 */
export const Board: React.FC<BoardProps> = ({ squares, onClick, winLine }) => {
  const boardSize = 3;
  const boardRow = [];
  let isHighlight;

  for (let row = 0; row < boardSize; row++) {
    const squres = [];

    for (let col = 0; col < boardSize; col++) {
      const idx = row * 3 + col;
      isHighlight = winLine.includes(idx);
      squres[col] = (
        <Square
          value={squares[idx]}
          onClick={() => onClick(idx)}
          key={col}
          isHighLight={isHighlight}
        />
      );
    }

    boardRow.push(
      <div className="board-row" key={row}>
        {squres}
      </div>
    );
  }

  return <div>{boardRow}</div>;
};
