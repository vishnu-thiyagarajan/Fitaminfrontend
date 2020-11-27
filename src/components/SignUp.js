import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { RegisterUser } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

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

export default function SignUp() {
  const [allroles,setAllRoles] = useState([]);
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const loading = useSelector(state => state.user.loading)
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const message = useSelector(state => state.user.message)
  const error = useSelector(state => state.user.error)
  const [open, setOpen] = useState(false);
  const [msgopen, setMsgOpen] = useState(false);
  const dispatch = useDispatch()
  const register = (name,email,password,role) => dispatch(RegisterUser(name,email,password,role))
  const handleClose = (event, reason) => {
    setOpen(false);
    setMsgOpen(false);
  };
  useEffect(() => {
    setOpen(Boolean(error))
    setMsgOpen(Boolean(message))
  },[error, message, setOpen, setMsgOpen]);
  useEffect(() =>{
    axios.get('/allroles').then(res=>{
      setAllRoles(res.data)
    }).catch(error => {
      alert('error: '+ error)
    })
  },[])
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
      <Snackbar open={msgopen} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          {message}
        </Alert>
      </Snackbar>
      {isAuthenticated && <Redirect to='/'/> }
      {!isAuthenticated && <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fullname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="role">Role</InputLabel>
              <Select
                labelId="role"
                id="roleselect"
                value={role}
                onChange={(e)=>setRole(e.target.value)}
                label="Role"
              >
                {
                  allroles.map((role,index)=><MenuItem key={index} value={role}>{role.name}</MenuItem>)
                }
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Button
            disabled={loading}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>register(name,email,password,role)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>}
    </Container>
  );
}