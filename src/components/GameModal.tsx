import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useRouter } from 'next/router';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function GameModal({setIsModalOpen}) {
    const router = useRouter();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [pid, setPid] = useState<string | string[]>()

    const handleClose = () => {
        setIsModalOpen(false);
    };
    
    useEffect(() => {
        // idがqueryで利用可能になったら処理される
        if (router.asPath !== router.route) {
            const {id} = router.query
            setPid(id)
        }
    }, [router]);

    const body = (
        <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">対戦ID</h2>
        <p id="simple-modal-description">
            こちらの対戦IDは{pid}です。
        </p>
        </div>
    );

    return (
        <div>
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
        </div>
    );
}