import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { resetErrorAndMessage, ResetPassword } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
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
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    anchor: {
      cursor: 'pointer',
    }
  }));

function ResetPswd (){
  let history = useHistory()
  const message = useSelector(state => state.user.message)
  const error = useSelector(state => state.user.error)
  const loading = useSelector(state => state.user.loading)
  const classes = useStyles();
  const [oldpassword, setOldPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const dispatch = useDispatch()
  const reset = (obj) => dispatch(ResetPassword(obj))
  const [erroropen, setErrorOpen] = useState(false)
  const [messageopen, setMessageOpen] = useState(false)
  const handleClose = () => {
    setErrorOpen(false)
    setMessageOpen(false)
    dispatch(resetErrorAndMessage())
  }
  useEffect(() => {
    if(message) {
      setOldPassword('')
      setNewPassword('')
    }
    setErrorOpen(Boolean(error))
    setMessageOpen(Boolean(message))
  },[error, message]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar open={erroropen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Snackbar open={messageopen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
      <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                name="oldpassword"
                label="Old Password"
                type="password"
                id="oldpassword"
                value={oldpassword}
                autoComplete="current-password"
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="newpassword"
                label="New Password"
                type="password"
                id="newpassword"
                value={newpassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            disabled={loading}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>reset({oldpassword,newpassword})}
          >
            Reset Password
          </Button>
        </form>
        <Grid container align="center">
            <Grid item xs>
              <Link className={classes.anchor} onClick={() => history.goBack()} variant="body2">
                Go back
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
};

export default ResetPswd