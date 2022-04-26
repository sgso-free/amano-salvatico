import './../styles/Cart.css'; 
import {useContext} from 'react'; 
import {CartContext} from "./CartContext";

const CartItem = ({item}) => {

        const cartContextLocal = useContext(CartContext);
        console.log(item);
        return(
           <div className="item-list" key={item.idItem}>
                <img  src={item.imgItem} alt={item.nameItem} height="100" /> {item.nameItem} -- {item.qtyItem} unidad{item.qtyItem>1?"es":""}   -- $ {cartContextLocal.calcTotalPerItem(item.idItem)}             
                <button onClick = {()=>cartContextLocal.deleteItem(item.idItem)} className="button-borrar-item" >Borrar</button>
           </div>
        )
}
export default CartItem;
 