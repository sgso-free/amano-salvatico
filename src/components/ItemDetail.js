import './../styles/ItemDetail.css';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';

const ItemDetail = ({item}) => {

    const addCart = (qty) => {
        console.log("Agregaste " + qty + " elementos al carrito.");
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
                        <ItemCount stock={item.stock} initial={1} onAdd={addCart}/> 
                        <p><Link to={'/category/'+item.idCategory} className="button-return" >Volver</Link></p>
                    </div>
                : <p>Cargando!!</p>
            }
        </>
        
    )
}
export default ItemDetail;