import React from "react";
import { LogoutUser } from '../redux';
import { useSelector, useDispatch } from 'react-redux';

function Admin (){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  return (
    <div>
      <h1>Hi {user.name}</h1>
      <br/>
      <button onClick={()=>dispatch(LogoutUser())}>logout</button>
      <br />
      <h1>this page is only for admins</h1>
    </div>
  );
};

export default Admin