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
interface SignupInput {
    id: string;
    pass: string;
}

export default function SignUp() {
  const classes = useStyles();
  const router = useRouter();
  const [signupInput, setSignupInput] = useState<SignupInput>({
      id: '',
      pass: ''
  })
  const handleSubmit = async(event) => {
    event.preventDefault();
    /**
     * url: /users/{user_id}?pass="hoge"にGETしてユーザー取得
     * axiosを使いましょう
     */

    /**
     * localStorageのuserに入れる
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
          Sign In
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
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}