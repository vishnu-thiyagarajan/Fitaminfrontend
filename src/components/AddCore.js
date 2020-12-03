import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { resetUpdateCore, AddCoreRecipe } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

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

  function Alert(props) {
return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AddCore (){
  let history = useHistory()
  const added = useSelector(state => state.dish.newcoreadded)
  const error = useSelector(state => state.dish.error)
  const loading = useSelector(state => state.dish.newcoreloading)
  const classes = useStyles();
  const [name, setName] = useState('');
  const [recipe, setRecipe] = useState('');
  const [nutrition, setNutrition] = useState('');
  const [open, setOpen] = useState(false);
  const [msgopen, setMsgOpen] = useState(false);
  const dispatch = useDispatch()
  const handleClose = (event, reason) => {
    setOpen(false);
    setMsgOpen(false);
    dispatch(resetUpdateCore())
  };
  useEffect(() => {
    if (added){
      dispatch(resetUpdateCore())
      setName('')
      setRecipe('')
      setNutrition('')
      setMsgOpen(true)
    }
    if (error) {
      setOpen(true)
    }
  },[error,added,dispatch,history]);

  const handleSubmit = ()=>{
      if(name && recipe && nutrition) dispatch(AddCoreRecipe({name, recipe, nutrition}))
  }
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
          Added Successfully
        </Alert>
      </Snackbar>
      <form className={classes.form} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="recipeName"
                variant="outlined"
                required
                fullWidth
                id="recipeName"
                label="Recipe Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                fullWidth
                id="recipe"
                label="Recipe ingredients"
                required
                multiline
                rows={1}
                rowsMax={100}
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                fullWidth
                id="nutrition"
                label="Nutrition"
                required
                multiline
                rows={1}
                rowsMax={100}
                value={nutrition}
                onChange={(e) => setNutrition(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            disabled={loading}
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Add Core Recipe
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>history.push('/')}
          >
            Go Home
          </Button>
        </form>
    </Container>
  );
};

export default AddCore