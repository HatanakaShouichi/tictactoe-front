import React from "react";
import { SquareValue } from "./type";
/**
 * Square Interface
 */
interface SquareProps {
  value: SquareValue;
  onClick: () => void;
  isHighLight: boolean;
}

/**
 * Square用のコンポーネント
 */
export const Square: React.FC<SquareProps> = ({
  value,
  onClick,
  isHighLight
}) => {
  const className = isHighLight ? "highlightedSquare" : "square";
  // tsx
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
