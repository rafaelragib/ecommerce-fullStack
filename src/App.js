import React,{useState,useEffect} from 'react'
import {Products,Navbar,Cart} from "./components/";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const App= ()=> 
{
  const [cartItems,setCartItems]=useState([]);
    
    const addItem= (id) => 
    {
        setCartItems(arr=>[...arr,id]);
    }
  return (
    <div>
      <Navbar itemCount={cartItems.length}/>
      <Products addItem={addItem}/>
   </div>
  );
}

export default App;
