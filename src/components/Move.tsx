// Moves.tsx
import { Button, createStyles, makeStyles } from "@material-ui/core";
import React from "react";
import { History } from "./type";

/**
 * Move interface
 */
interface MoveProps {
  histories: History[];
  jumpTo: (move: number) => void;
  sortType: string;
}

const useStyles = makeStyles((theme) => createStyles({
  button: {
      height: "20px"
  },
  lastButton: {
    height: "20px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#556cd6"
  }
}))

/**
 * Move コンポーネント
 */
export const Move: React.FC<MoveProps> = ({ histories, jumpTo, sortType }) => {
  const classes = useStyles();
  const moveList = [];
  histories.map((history, move) => {
    const place = move
      ? "Go to move #" +
        move +
        `(${history.location.col}, ${history.location.row})`
      : "Go to game start";
    moveList.push(
      <li key={move}>
        <Button 
          variant="contained"
          onClick={() => jumpTo(move)}
          className={move === histories.length - 1 ? classes.lastButton : classes.button}
        >{place}</Button>
      </li>
    );
  });
  // tsx
  return <ol>{sortType === "asc" ? moveList : moveList.reverse()}</ol>;
};
