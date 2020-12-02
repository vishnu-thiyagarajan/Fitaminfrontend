import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GetCore, setCore, resetCore } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({});

export default function Recipename() {
//   const classes = useStyles();
  let dispatch = useDispatch()
  const allCores = useSelector(state=> state.dish.allcores)
  const handleChange = (e,value)=>{
    if (!value) return dispatch(resetCore())
    dispatch(setCore(value.name))
  }
  useEffect(()=>{
    dispatch(GetCore())
  },[dispatch])
  return (
    <Autocomplete
      id="select-demo"
      options={allCores}
      fullWidth
      autoHighlight
      onChange={handleChange}
      selectOnFocus
      handleHomeEndKeys
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          autoFocus
          label="Choose a recipe"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
