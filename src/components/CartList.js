import CartItem from "./CartItem";
import './../styles/Cart.css';
import {useContext} from 'react'; 
import {CartContext} from "./CartContext";

const CartList = ( {items} ) => {

    const cartContextLocal = useContext(CartContext);

    return(
        <div className="lists"> 

            {
              (items.length >0) && <button onClick = {()=>cartContextLocal.removeList()} className="button-borrar-all" >Borrar Carrito</button>
            }      
            {               
                items  ? 
                    items.length >0 ? items.map(itemInL => <CartItem key={itemInL.idItem} item={itemInL} />)
                    :<p>No hay productos en el carrito</p>
                :<p>Cargando....</p> 
                    
            }
        </div>
    );
}
export default CartList;
 