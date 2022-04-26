import './../styles/ItemDetail.css';
import ItemCount from "./ItemCount";
import Checkout from "./Checkout";
import {Link} from 'react-router-dom';
import {useState, useContext} from 'react'; 
import {CartContext} from "./CartContext";
const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0); //State for Counter 
    const cartContextLocal = useContext(CartContext);

    const addCart = (qty) => {
        console.log("Agregaste " + qty + " elementos al carrito.");
        setItemCount(qty);  //Add to the cart
        cartContextLocal.addToCart(item,qty);
        return;
    }

    return(
        <>
            {
                item  ? 
                <div className="box-detail">       
                        <p><img src={item.pictureUrl} alt={item.title} height="100" /></p>
                        <p>{item.title}</p> 
                        <p>$ {item.price}</p> 
                        <p> {item.stock} unidad{item.stock>1?"es":""} disponibles</p>
                        <p>[{item.description}]</p>
                        
                        {
                         itemCount ===0 
                            ?<ItemCount stock={item.stock} initial={itemCount} onAdd={addCart}/> 
                            :<Checkout/>
                        } 
                        <Link to={'/category/'+item.idCategory} className="button-return-detail" >Volver</Link>
                    </div>
                : <p>Cargando!!</p>
            }
        </>
        
    )
}
export default ItemDetail;