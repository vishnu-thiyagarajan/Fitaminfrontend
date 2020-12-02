import React, { useEffect, useState } from "react";
import ButtonAppBar from './AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Recipename from './Recipename';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from "react-redux";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { GetCustom } from '../redux';

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
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // minHeight: '100vh',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  board:{
    width: '100%',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Home() {
  const classes = useStyles();
  let dispatch = useDispatch()
  const corerecipe = useSelector(state => state.dish.corerecipe)
  const coreid = useSelector(state => state.dish.coreid)
  const corenutrition = useSelector(state => state.dish.corenutrition)
  const customrecipe = useSelector(state => state.dish.customrecipe)
  const customnutrition = useSelector(state => state.dish.customnutrition)
  const [wantsto, setWantsto] = useState('')
  const [weight, setWeight] = useState('')
  const handleSearch = () =>{
    console.log(coreid)
    if (coreid) dispatch(GetCustom(coreid, wantsto, weight))
  }
  return (
    <>
    <ButtonAppBar />
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Dishes
          </Typography>
          <Recipename />
          <form className={classes.form} noValidate>
            <hr />
            <FormControl className={classes.form} variant="outlined" fullWidth>
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
            <FormControl className={classes.form} variant="outlined" fullWidth>
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
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSearch}
            >
              Search
            </Button>
          </form>
        </div>
      </Grid>
      {!corerecipe && <Grid item xs={false} sm={5} md={8} className={classes.image} />}
      {corerecipe && <Grid container spacing={3} item xs={12} sm={5} md={8} className={classes.board}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Core Recipe
              </Typography>
              <Typography variant="body2" component="p">
                {corerecipe.split('\n').map((str,index) => <li key={'reci' + index}>{str}</li>)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Core Nutrition
              </Typography>
              <Typography variant="body2" component="p">
              {corenutrition.split('\n').map((str,index) => <li key={'nutri'+index}>{str}</li>)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {customrecipe && <><Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Customized Recipe
              </Typography>
              <Typography variant="body2" component="p">
                {customrecipe.split('\n').map((str,index) => <li key={'rec' + index}>{str}</li>)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                Customized Nutrition
              </Typography>
              <Typography variant="body2" component="p">
              {customnutrition.split('\n').map((str,index) => <li key={'nut'+index}>{str}</li>)}
              </Typography>
            </CardContent>
          </Card>
        </Grid></>}
      </Grid>}
      {/* {corerecipe && <Grid container spacing={3} item xs={12} sm={5} md={8} className={classes.board}> */}
      {/* </Grid>} */}
    </Grid>
    </>
  );
}