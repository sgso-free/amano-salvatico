import cart from './../recursos/cart.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from "./CartContext";

 const  CartWidget  = () =>{

    const cartLocal = useContext(CartContext);

        console.log(cartLocal);
        let cartAmount = cartLocal.calcItemQty();

        console.log("Amounnt items",cartAmount);
        return(
            <div className="navbar-nav">
                <Link to={'/cart'} className="nav-item nav-link" > <img src={cart} alt="Cart" height="36" /> {cartAmount>0? <span className="red">{cartAmount}</span>: ""} </Link>
           </div>
        )
 }
 export default CartWidget; 