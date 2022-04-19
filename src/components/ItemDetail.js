import './../styles/ItemDetail.css';
import ItemCount from "./ItemCount";
import Checkout from "./Checkout";
import {Link} from 'react-router-dom';
import {useState} from 'react'; 

const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0); //State for Counter 

    const addCart = (qty) => {
        console.log("Agregaste " + qty + " elementos al carrito.");
        setItemCount(qty)  //Add to the cart
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
                        <p> {item.stock} unidade{item.stock>1?"s":""} disponibles</p>
                        <p>[{item.description}]</p>
                        
                        {
                         itemCount ===0 
                            ?<ItemCount stock={item.stock} initial={itemCount} onAdd={addCart}/> 
                            :<Checkout/>
                        } 
                        <p><Link to={'/category/'+item.idCategory} className="button-return" >Volver</Link></p>
                    </div>
                : <p>Cargando!!</p>
            }
        </>
        
    )
}
export default ItemDetail;