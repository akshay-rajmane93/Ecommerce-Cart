import React, { useState } from 'react';
import Navbar from './Navbar';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Cart(props) {
    if(props.cart.price<=100){
        
        var itemsPrice = props.cart.reduce((a, c) => a + c.qty * c.price, 0);
    }else if(props.cart.price>100 && props.cart.price<=500)
    {
        var itemsPrice = props.cart.reduce((a, c) => a + c.qty * c.price-(c.price*0.1), 0);
    }else{
        var itemsPrice = props.cart.reduce((a, c) => a + c.qty * c.price-(c.price*0.2), 0);
    }
   
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="cart">
    <h2 className="cart_heading">Cart</h2>
      <div>{props.cart.length === 0 && <div className="empty_cart">Cart is Empty</div>}</div>
      {props.cart.map((val)=>{
          return(
          <div key={val.id} >
              <h2>Name : {val.item_name}</h2>
              <AddIcon className="adm2 cart1_btnpos" onClick={()=>props.onAdd(val)}/>
              <RemoveIcon className="rmv2 cart1_btnpos" onClick={()=>props.onRemove(val)}/>
                <h3>
              {val.price<=100?(<p>{val.qty} X ₹{val.price.toFixed(2)}</p>):val.price>100 && val.price<=500?(<p>{val.qty} X ₹{val.price-(val.price*0.1).toFixed(2)} <span> ( 10% Discount on ₹{val.price.toFixed(2)})</span></p>):(<p>{val.qty} X ₹{val.price-(val.price*0.2).toFixed(2)} <span> ( 20% Discount on ₹{val.price.toFixed(2)}</span>)</p>)} 
              </h3>
          </div>
          )
      })}
      {props.cart.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <h2 className="col-2">Items Price</h2>
              <h3 className="col-1 text-right">₹{itemsPrice.toFixed(2)}</h3>
            </div>
            <div className="row">
              <h2 className="col-2">Tax Price</h2>
              <h3 className="col-1 text-right">₹{taxPrice.toFixed(2)}</h3>
            </div>
            <div className="row">
              <h2 className="col-2">Shipping Price</h2>
              <h3 className="col-1 text-right">
              ₹{shippingPrice.toFixed(2)}
              </h3>
            </div>

            <div className="row">
              <div className="col-2">
                <h2>Total Price</h2>
              </div>
              <div className="col-1 text-right">
                <h3>₹{totalPrice.toFixed(2)}</h3>
              </div>
            </div>
            <hr />
            <div className="row">
              <button className="checkout" onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button>
            </div>
          </>

        )}
     
    </div>
  );
}

export default Cart;