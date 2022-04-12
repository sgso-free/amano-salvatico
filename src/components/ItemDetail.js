import './../styles/ItemDetail.css';
import ItemCount from "./ItemCount";

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
                        <p><button className="button-return" >Volver</button></p>
                    </div>
                : <p>Cargando!!</p>
            }
        </>
        
    )
}
export default ItemDetail;