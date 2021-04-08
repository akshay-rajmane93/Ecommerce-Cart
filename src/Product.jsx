import React from 'react';
import Pro from './Pro';
import Cart from './Cart';


function Product(props) {
   
   
  return (<>
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
