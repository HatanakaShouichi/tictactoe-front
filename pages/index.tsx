import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 20,
    textAlign: "left"
  },
});

// const rows = [
//   {
//     first_user_id: "a",
//     second_user_id: "b",
//     winner_user_id: "b",
//     created_at: "sdfsf"
//   }
// ]

export default function BasicTable() {
  // // const { register, handleSubmit, setValue } = useForm<CaliforniaFormInput>({
  // //   // defaultがtrueなのでfalseに切り替える
  // //   shouldUnregister: false,
  // // });
  // const classes = useStyles();
  // const [rows, setRows] = useState<any[]>([])
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const user = window.localStorage.getItem("user")
  //     const result = await axios.get(`https://nc8t9d7uo1.execute-api.ap-northeast-1.amazonaws.com/dev/games/`, { 
  //       params: { 
  //           user_id: JSON.parse(user).id
  //         }
  //     })
  //      setRows(result.data);
  //      setLoading(false);
  //    };

  //   fetchData();
  // });

  // const drawRows = []
  // console.log(rows)
  // for(const row of rows) {
  //   drawRows.push((
  //     <TableRow>
  //       <TableCell align="right">{row.first_user_id}</TableCell>
  //       <TableCell align="right">{row.second_user_id}</TableCell>
  //       <TableCell align="right">{row.winner_user_id}</TableCell>
  //       <TableCell align="right">{row.created_at}</TableCell>
  //     </TableRow>
  //   ))
  // }
  // if (loading) {
  //   return <CircularProgress />;
  // }

  return (
    <div></div>
  );
}