import React from "react";
import ButtonAppBar from './AppBar';
import { useHistory } from "react-router-dom";
import Loader from './Loader';
import roles from '../config/roles';
import BasicTable from './BasicTable';

function Home (){
  let history = useHistory()
  return (
    <>
      <ButtonAppBar />
      <h4 />
      <BasicTable />
      <h4 />
      <button onClick={()=>{history.push('/admin')}}>goto admin</button>
      {Loader(()=><div><h1>only for deoperators</h1></div>)(roles.deoperators)}
    </>
  );
};

export default Home