import './../styles/Cart.css'; 
import {useContext} from 'react'; 
import {CartContext} from "./CartContext";

const CartItem = ({item}) => {

        const cartContextLocal = useContext(CartContext);
        console.log(item);
        return(
           <div className="item-list" key={item.idItem}>
                <p><img src={item.imgItem} alt={item.nameItem} height="100" /> {item.nameItem} -- {item.qtyItem} unidad{item.qtyItem>1?"es":""}                
                <button onClick = {()=>cartContextLocal.deleteItem(item.idItem)} className="button-borrar" >Borrar</button></p>
           </div>
        )
}
export default CartItem;
 