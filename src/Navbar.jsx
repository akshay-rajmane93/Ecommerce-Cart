import React from 'react';
import {NavLink} from 'react-router-dom';



function Navbar(props) {
    
  return (
    <div className="headre">
    <NavLink className="text" exact to="/"><h2>Exotic Eats</h2></NavLink>
    <NavLink className="nav_cart" exact to="/cart"><i className="fas fa-shopping-cart">{''}{props.cartitems?(<span className=' w3-badge w3-red'>{props.cartitems}</span>):''}</i></NavLink>
    </div>

  );
}

export default Navbar;
