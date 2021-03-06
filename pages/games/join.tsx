import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid, Link } from "@material-ui/core";
import axios from "axios";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => createStyles({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

/**
 * SignUpInput
 */
interface GameInput {
    id: string;
}

export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();
  const [gameInput, setGameInput] = useState<GameInput>({
      id: ''
  })
  const handleSubmit = async(event) => {
    event.preventDefault();
    const user = window.localStorage.getItem("user");
    await axios.put(`https://nc8t9d7uo1.execute-api.ap-northeast-1.amazonaws.com/dev/games/${gameInput.id}`, { 
      id: gameInput.id,
      second_user_id: JSON.parse(user).id
    })
    
    router.push(`/games/${gameInput.id}`)
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Initiate Battle
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit} >
          <TextField
            variant='filled'
            required
            fullWidth
            label="??????ID"
            value={gameInput.id}
            onChange={(event) => setGameInput({...gameInput, id: event.target.value})}
            autoFocus
            autoComplete='new-password'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Initiate Battle
          </Button>
        </form>
      </div>
    </Container>
  );
}