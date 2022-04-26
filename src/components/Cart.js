
import CartList from "./CartList";
import {CartContext} from "./CartContext";
import { useContext } from 'react';
import {Link} from "react-router-dom";
const Cart = () =>{

    const cartContextLocal = useContext(CartContext);

    return (

        <div className="box-cart">
            <h1>Tu Carrito</h1>
            <div className="bar=button">
                <Link to='/' className="button-return-cart" >Continuar Comprando</Link>
                {
                    (cartContextLocal.cartList.length >0) && <button onClick = {()=>cartContextLocal.removeList()} className="button-borrar-all" >Borrar Carrito</button>
                }                 
            </div>
            <div className="box-mid-cart">
                <CartList items={cartContextLocal.cartList} />
                {
                    (cartContextLocal.cartList.length >0) && <div className="box-ckeckout">
                              <div>Subtotal: {cartContextLocal.calcSubTotal()}</div>
                              <div>Impuestos: {cartContextLocal.calcTaxes()}</div>
                              <div>Total: {cartContextLocal.calcTotal()}</div>
                              <div>Cantidad Articulos: {cartContextLocal.calcItemsQty()}</div>
                     </div>
                 } 
            </div>
        </div>
    )
}

export default Cart;