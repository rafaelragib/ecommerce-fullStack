import React,{useState,useEffect} from 'react'
import {Products,Navbar} from "./components/";
import {commerce} from './lib/commerce'
const App= ()=> 
{
  const [products,setProducts]= useState([]);
  const [cart,setCart]=useState([]);

  const fetchProduct = async () =>
  {
    const {data} =await commerce.products.list();
    setProducts(data);
  }

  const fetchCart=async()=>
  {
    setCart(await commerce.products.retrieve());
  }

  const handleAddToCart = async(productId,quantity) =>
  {
    const item =await commerce.cart.add(productId,quantity);
    setCart(item.cart);
  }

  console.log(cart);

  useEffect(() => {
    fetchProduct();
    fetchCart();
  }, [])
 
  return (
    <div>
    <Navbar totalItems={cart.total_items}/>
   <Products products={products} onAddToCart={handleAddToCart}/>
   </div>
  );
}

export default App;
