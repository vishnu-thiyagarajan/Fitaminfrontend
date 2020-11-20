import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { createUserAllUsers, resetUpdateUser, updateUserAllUsers, deleteUserAllUsers, getAllUsers } from '../redux';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const [allroles,setAllRoles] = useState([]);
  const [edit, setEdit] = useState({name: '', role:{}});
  const classes = useStyles();
  const dispatch = useDispatch();
  const allusers = useSelector(state => state.allusers.users)
  const updated = useSelector(state => state.allusers.updated)
  useEffect(() =>{
    dispatch(getAllUsers())
    if (updated === true) {
      dispatch(resetUpdateUser());
    }
  },[dispatch,updated])

  const [open, setOpen] = useState(false);
  const handleClickDelete = (row) => {
    dispatch(deleteUserAllUsers(row))
  }
  const handleClickOpen = (row) => {
    setEdit({
      email: row.email,
      name: row.name,
      role: row.role
    })
    setOpen(true);
  };
  const handleClose = () => {setOpen(false);};
  const handleSave = () => {
    dispatch(updateUserAllUsers(edit))
    setOpen(false);
  };
  useEffect(() =>{
    axios.get('/allroles').then(res=>{
      setAllRoles(res.data)
      console.log(res.data)
    }).catch(error => {
      alert('error: '+ error)
    })
  },[])
  return (
    <Container component="main" maxWidth="xl">
      <CssBaseline />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit User</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={edit.name}
            onChange={(e)=>{setEdit({...edit, name:e.target.value})}}
            fullWidth
          />
          <FormControl margin="dense" fullWidth>
            <InputLabel id="role">Role</InputLabel>
            <Select
              labelId="role"
              id="roleselect"
              value={edit.role.name}
              onChange={(e)=>{setEdit({...edit, role:allroles.find((role)=>role.name===e.target.value)})}}
              label="Role"
            >
              {
                allroles.map((role,index)=><MenuItem key={index} value={role.name}>{role.name}</MenuItem>)
              }
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Created on</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allusers.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.role.name}</TableCell>
              <TableCell align="right">{row.createdAt}</TableCell>
              <TableCell align="right">
                <IconButton color="primary" aria-label="edit" onClick={()=>handleClickOpen(row)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="secondary" onClick={()=>handleClickDelete(row)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
