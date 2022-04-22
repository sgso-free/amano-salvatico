import {Link} from "react-router-dom";
import CartList from "./CartList";
import {CartContext} from "./CartContext";
import { useContext } from 'react';

const Cart = () =>{

    const cartContextLocal = useContext(CartContext);

    return (

        <div className="box-cart">
            <h1>Tu Carrito</h1>
            <Link to='/' className="button-return" >Continuar Comprando</Link>
            <CartList items={cartContextLocal.cartList} />
        </div>
    )
}

export default Cart;