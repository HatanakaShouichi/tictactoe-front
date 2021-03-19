import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import { useRouter } from 'next/router';

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
interface SignupInput {
    id: string;
    name: string;
    pass: string;
}

export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();
  const [signupInput, setSignupInput] = useState<SignupInput>({
      id: '',
      name: '',
      pass: ''
  })
  const handleSubmit = async(event) => {
    event.preventDefault();
    /**
     * サインアップを行う
     * axiosで、/usersにPOSTする
     */
    /**
     * ローカルストレージのuserに入れる
     */
    /**
     * ルートに飛ばす
     */
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit} >
          <TextField
            variant='filled'
            required
            fullWidth
            label="Id"
            value={signupInput.id}
            onChange={(event) => setSignupInput({...signupInput, id: event.target.value})}
            autoFocus
            autoComplete='new-password'
          />
          <TextField
            variant='filled'
            required
            fullWidth
            label="Name"
            value={signupInput.name}
            onChange={(event) => setSignupInput({...signupInput, name: event.target.value})}
            autoComplete='new-password'
          />
          <TextField
            variant='filled'
            required
            fullWidth
            label="Password"
            value={signupInput.pass}
            onChange={(event) => setSignupInput({...signupInput, pass: event.target.value})}
            autoComplete='new-password'
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
