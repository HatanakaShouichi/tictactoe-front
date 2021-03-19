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
  
  /**
   * useEffectを使って
   * マウント後にもし、ログインされていなければ、/si
   */

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