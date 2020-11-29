import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { resetState, ForgotPassword } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

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
  }));

function ForgotPswd (){
  const message = useSelector(state => state.user.message)
  const error = useSelector(state => state.user.error)
  const loading = useSelector(state => state.user.loading)
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const dispatch = useDispatch()
  const forgot = (obj) => dispatch(ForgotPassword(obj))
  const [erroropen, setErrorOpen] = useState(false)
  const [messageopen, setMessageOpen] = useState(false)
  const handleClose = () => {
    setErrorOpen(false)
    setMessageOpen(false)
    dispatch(resetState())
  }
  useEffect(() => {
    if(message) setEmail('')
    setErrorOpen(Boolean(error))
    setMessageOpen(Boolean(message))
  },[error, message, setErrorOpen, setMessageOpen, setEmail]);
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
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
      <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                autoFocus
                name="email"
                label="Email Address"
                type="email"
                id="email"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
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
            onClick={()=>forgot({ email })}
          >
            Send New Password
          </Button>
        </form>
        <Grid container align="center">
            <Grid item xs>
              <Link href="/signin" variant="body2">
                Goto login
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
};

export default ForgotPswd