import React,{useState,useEffect} from 'react'
import {Products,Navbar,Cart} from "./components/";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App= ()=> 
{

  return (
    <div>
      <Navbar/>
      <Products/>
   </div>
  );
}

export default App;
