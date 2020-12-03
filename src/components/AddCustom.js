import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { resetUpdateCore, AddCustomRecipe } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import Recipename from './Recipename';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const allweights = [
  {name:'30-35'},
  {name:'35-40'},
  {name:'40-45'},
  {name:'45-50'},
  {name:'50-55'},
  {name:'55-60'},
  {name:'60-65'},
  {name:'65-70'},
  {name:'70-75'},
  {name:'75-80'},
  {name:'80-85'},
  {name:'85-90'},
  {name:'90-95'},
  {name:'95-100'},
]
const allwantsto = [
  {name: 'lose'},
  {name: 'maintain'},
  {name: 'gain'},
]
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
  const added = useSelector(state => state.dish.newcustomadded)
  const coreid = useSelector(state => state.dish.coreid)
  const error = useSelector(state => state.dish.error)
  const loading = useSelector(state => state.dish.newcustomloading)
  const classes = useStyles();
  // const [name, setName] = useState('');
  const [wantsto, setWantsto] = useState('')
  const [weight, setWeight] = useState('')
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
      setWantsto('')
      setWeight('')
      setRecipe('')
      setNutrition('')
      setMsgOpen(true)
    }
    if (error){
      setOpen(true)
    }
  },[error,added,dispatch,history]);

  const handleSubmit = ()=>{
      if(coreid && wantsto && weight && recipe && nutrition) dispatch(AddCustomRecipe({coreid, wantsto, weight, recipe, nutrition}))
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
              <Recipename />
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="Wantsto">Wants to</InputLabel>
              <Select
                labelId="wantsto"
                id="wantsto"
                value={wantsto}
                onChange={(e)=>setWantsto(e.target.value)}
                label="Wants to?"
              >
                {
                  allwantsto.map((item,index)=><MenuItem key={index} value={item.name}>{item.name}</MenuItem>)
                }
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel id="Weight">Weight</InputLabel>
              <Select
                labelId="weight"
                id="weight"
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
                label="Weight"
              >
                {
                  allweights.map((range,index)=><MenuItem key={index} value={range.name}>{range.name}</MenuItem>)
                }
              </Select>
            </FormControl>
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
            Add Custom Recipe
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