import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import axios from 'axios';

const useStyles = makeStyles((theme) => createStyles({
    profile: {
      cursor: 'pointer',
      textAlign: 'right'
    }
  }))


export const GameButton: React.FC = () => {
    const router = useRouter()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const goAlone = () => {
        setAnchorEl(null);
        router.replace('/game');
    };

    const goCreate = async() => {
        setAnchorEl(null);
        /**
         * ローカルストレージからuser情報を取ってきて、gameを作成する
         * その後にgame/{game_id}に飛ばす
         */
    };

    const goFriend = async() => {
        setAnchorEl(null);
        router.replace(`/games/join`);
    };

    const goAI = () => {
        setAnchorEl(null);
        router.replace('/')
    };

    return (
        <div className={classes.profile}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Tic Tac Toe
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={goAlone}>Play Alone</MenuItem>
                <MenuItem onClick={goCreate}>Create Game</MenuItem>
                <MenuItem onClick={goFriend}>Join Game</MenuItem>
                <MenuItem onClick={goAI}>Play with AI</MenuItem>
            </Menu>
        </div>
    );
}