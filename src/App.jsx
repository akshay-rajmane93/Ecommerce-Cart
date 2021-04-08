import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';


import Product from './Product';

import Cart from './Cart';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Cart2 from './Cart2';

function App() {
  const[cart,setCart]=useState([]);
  const[data,setData]=useState([]);
  
 useEffect(()=>{
     async function fetchapi(){
         const url=`https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7/`;
         const res = await fetch(url);
         const resjson = await res.json();

         console.log(resjson);
         setData(resjson);
         
     }
     fetchapi();
 },[])
    
    const onAdd=(product)=>{
        const exist = cart.find((x)=>x.id===product.id);
        if(exist){
            setCart(
                cart.map((x)=>x.id===product.id?{...exist,qty:exist.qty+1}:x)
            );
        }else{
            setCart([...cart,{...product,qty:1}]);
        }
    };
    const onRemove=(product)=>{
        const exist = cart.find((x)=>x.id===product.id);
        if(exist.qty === 1){
            setCart(cart.filter((x)=>x.id !== product.id))
        }else{
            setCart(
                cart.map((x)=>x.id===product.id?{...exist,qty:exist.qty-1}:x)
            );
        }
    };
  return (
    <div className="app">
    
    <BrowserRouter>
    <Navbar cartitems={cart.length}/>
    <Switch>
    
    

      <Route exact path="/" ><Product onAdd={onAdd} onRemove={onRemove} cart={cart} data={data}/></Route>
      <Route exact path="/cart" ><Cart2 cart={cart}  onAdds={onAdd} onRemoves={onRemove}/></Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
