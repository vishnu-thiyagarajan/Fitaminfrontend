import React from "react";
import { LogoutUser } from '../redux';
import { useSelector, useDispatch } from 'react-redux';


function Home (props){
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  return (
    <div>
      <h1>Hi {user.name}</h1>
      <br/>
      <button onClick={()=>dispatch(LogoutUser())}>logout</button>
    </div>
  );
};

export default Home