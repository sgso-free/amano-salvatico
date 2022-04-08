import Item from "./Item";
import './../styles/Item.css';
const ItemList = ( {items} ) => {
    return(
        <div className="boxs"> 
            {               
                items  ? 
                    items.length >0 
                    ?items.map(item => <Item key={item.id} title={item.title} details={item.description} image={item.pictureUrl[0]}/>) 
                    :<p>Cargando....{items.length}</p>
                :<p>No Cargando....</p> 
                    
            }
        </div>
    );
}
export default ItemList;
//<Item key={item.id} name={item.name}/>