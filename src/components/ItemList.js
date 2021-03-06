import Item from "./Item";
import './../styles/Item.css';
const ItemList = ( {items} ) => {
    return(
        <div className="boxs"> 
            {               
                items  ? 
                    items.length >0 
                    ?items.map(item => <Item key={item.id} id={item.id} title={item.title} details={item.description} image={item.pictureUrl} category={item.idCategory}/>) 
                    :<p>Cargando....</p>
                :<p>No exiten elementos....</p> 
                    
            }
        </div>
    );
}
export default ItemList; 