import React from "react";
import { LogoutUser } from '../redux';
import { useSelector, useDispatch } from 'react-redux';
import Loader from './Loader';
import roles from '../config/roles';

function Home (){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  return (
    <div>
      <h1>Hi {user.name}</h1>
      <br/>
      <button onClick={()=>dispatch(LogoutUser())}>logout</button>
      {Loader(()=><div><h1>only for deoperators</h1></div>)(roles.deoperators)}
    </div>
  );
};

export default Home