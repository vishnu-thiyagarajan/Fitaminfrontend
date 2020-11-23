import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { LogoutUser } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  console.log(user)
  const newUser = () => {
    history.push('/createuser');
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton className={classes.menuButton} color="inherit" aria-label="add to new" onClick={newUser}>
            <PersonAddIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hi {user.name}
          </Typography>
          <Button color="inherit" onClick={()=>dispatch(LogoutUser())}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
