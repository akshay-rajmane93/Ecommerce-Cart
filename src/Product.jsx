import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Cart2 from './Cart2';

import Pro from './Pro';

import Cart from './Cart';


function Product(props) {
   
   
  return (<>
  {/* <div className="main_div_product">
    <div className="products">
     
          <Pro key={props.product.id} product={props.product} onAdd={props.onAdd}/>)
        
    </div>

    </div> */}
    
    <div className="app_div">
    
    <div className="for_products">
    {props.data.map((val)=>{
          return(
          <Pro key={val.id} product={val} onAdd={props.onAdd}/>)
      })}
      </div>
      <div className="for_cart">
      <Cart cart={props.cart} onAdd={props.onAdd} onRemove={props.onRemove}/>
      </div>    
      </div> 
      
    </>
  );
}

export default Product;
