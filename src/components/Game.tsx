import React, { useState, useEffect } from "react";
import { History } from "./type";
import { Board } from "./Board";
import { Move } from "./Move";
import { Button, CircularProgress, createStyles, makeStyles } from "@material-ui/core";
import { useRouter } from 'next/router';
import axios from "axios";

/**
 * Gameコンポーネントで使う関数
 */
const useStyles = makeStyles((theme) => createStyles({
  game: {
      marginLeft: "40%",
      marginTop: "20px",
      display: "flex",
      flexDirection: "row",
  },
  sortButton: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#556cd6"
  },
  status: {
    fontWeight: "bold",
    fontSize: "30px"
  },
}))
const calculateWinner = squares => {
  // 勝ちパターン9個
  const lines = [
    [0, 1, 2], // 横
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //縦
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //斜め
    [2, 4, 6]
  ];
  // 勝ちパターンなら勝ちユーザーを返す
  const winInfo = {
    winner: null,
    line: [null]
  };
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winInfo.winner = squares[a];
      winInfo.line = lines[i];
      return winInfo;
    }
  }
  return winInfo;
};

const toggleSortType = current => {
  return current === "asc" ? "desc" : "asc";
};

/**
 * Game 用のコンポーネント
 */
export const Game: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  // stateの管理
  const [historyList, setHistoryList] = useState<History[]>([
    {
      squares: Array(9).fill(null),
      location: {
        col: null,
        row: null
      }
    }
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [sortType, setSortType] = useState<"asc" | "desc">("asc");
  const [pid, setPid] = useState<string | string[]>();
  const [time, updateTime] = useState(Date.now());
  const [loading, setLoading] = useState(true);

  /**
   * むずい
   * /games/{game_id}にGET
   * useEffectを使って、レンダリング前と0.5秒毎に新しいデータを取ってくる
   */

  // イベントの管理
  const handleClick = async(i: number) => {
    const histories = historyList.slice(0, stepNumber + 1);
    const current = histories[stepNumber];
    // currentのコピー
    const squares = current.squares.slice();
    // 勝ちユーザーがいた場合
    if (calculateWinner(squares).winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    const newHistoryList = historyList.concat([
      {
        squares: squares,
        location: { col: (i % 3) + 1, row: Math.trunc(i / 3 + 1) }
      }
    ])
    setHistoryList(newHistoryList);
    /**
     * /games/{game_id}にputしてゲーム情報を更新
     */

    setStepNumber(stepNumber + 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  if (loading) {
    return <CircularProgress />;
  }
  // stateを描画用に変形
  const current = historyList[stepNumber];
  const winner = calculateWinner(current.squares).winner;
  const winLine = calculateWinner(current.squares).line;
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!current.squares.includes(null)) {
    status = "Draw";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  // tsx
  return (
    <div className={classes.game}>
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
          winLine={winLine}
        />
      </div>
      <div className="game-info">
        <div className={classes.status}>{status}</div>
        <Move histories={historyList} jumpTo={jumpTo} sortType={sortType} />
        <Button
          variant="contained"
          className={classes.sortButton}
          onClick={() => setSortType(toggleSortType(sortType))}
        >
          sort
        </Button>
      </div>
    </div>
  );
};
