import CartItem from "./CartItem";
import './../styles/Cart.css'; 

const CartList = ( {items} ) => {
 
    return(
        <div className="lists-item-cart"> 
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
 