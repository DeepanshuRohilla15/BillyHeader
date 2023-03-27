import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';
import { FilledInput } from '@material-ui/core';

const CustomizedSnackbar = ({open, setOpen}) => {
      const classes = useStyles();

      const handleClose = (event, reason) => {
            if(reason === 'clickaway') return;

            setOpen(false);
      }

  return (
    <div className={classes.root}>
      <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
      >
            <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
                  Transactions successfully created
            </MuiAlert>

      </Snackbar>
    </div>
  )
}

export default CustomizedSnackbar
