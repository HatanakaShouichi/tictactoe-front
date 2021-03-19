import {
  AppBar,
  createStyles,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {GameButton} from './GameButton';
import { ProfileButton } from './ProfileButton';

const useStyles = makeStyles((theme) => createStyles({
  play: {
      cursor: "pointer",
  }
}))

const Header = () => {
  const router = useRouter();
  const classes = useStyles();
  const [userName, setUserName] = useState('')
  
  useEffect(() => {
    const item = localStorage.getItem("user")
    if(item == null && router.pathname != "/signin" && router.pathname != "/signup") {
      router.replace('/signin')
    } 
    if(item != null) {
      const name = JSON.parse(item).name
      setUserName(name)
    }
  })

  return (
    <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <GameButton />
            <ProfileButton
              userName={userName}
            />
          </Toolbar>
        </AppBar>
    </div>
  )
}
export default Header