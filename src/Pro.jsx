import React from 'react';
import pic from './Images/dummy2.jpeg';


function Pro(props) {
    const onAdd=()=>{
        props.onAdd(props.product);
    }
  return (
      <>
      <div className="pro_main">
    <div className="pro">
      <h3 className="pro_name">Name : {props.product.item_name}</h3>
      <h3>price: ₹{props.product.price}</h3>
      <h4>About item:-</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
    
   
    </div>
    <div className="pro_img">
    <img src ={pic} alt="..."/>
    <button onClick={onAdd}>Add to cart</button>
    </div>
    </div>
    </>
    
  );
}

export default Pro;