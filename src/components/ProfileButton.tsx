import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => createStyles({
    profile: {
      marginLeft: 'auto',
      cursor: 'pointer',
      textAlign: 'right'
    }
  }))

interface IProps {
    userName: string;
}

export const ProfileButton: React.FC<IProps> = ({userName}) => {
    const router = useRouter()
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const name = userName

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        setAnchorEl(null);
        window.localStorage.removeItem("user");
        router.replace('/signin');
    };

    const goProfile = () => {
        setAnchorEl(null);
        router.replace('/')
    };

    return (
        <div className={classes.profile}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {name}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={goProfile}>Go Profile</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}