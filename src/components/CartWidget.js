import cart from './../recursos/cart.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from "./CartContext";

 const  CartWidget  = () =>{

    const cartLocal = useContext(CartContext);

        console.log(cartLocal);

        return(
            <div className="navbar-nav">
                <Link to={'/cart'} className="nav-item nav-link" > <img src={cart} alt="Cart" height="36" /> 8 - Articulos</Link>
           </div>
        )
 }
 export default CartWidget;
 
 /*className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"*/
 