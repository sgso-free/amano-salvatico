import { useState } from "react";
import './../styles/ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [countItem, setCount] = useState(initial);
    const decrement = () =>{
        if (countItem>initial){
            setCount(countItem-1); 
        }
    }
    const increment = () =>{
        if (countItem<stock){
            setCount(countItem+1); 
        }
    }
    const onAddCond = () =>{
        if (stock>0 && countItem>0) {
            onAdd(countItem);
        }
    }
    return (
        <>
            <div>Title:Producto</div>
            <div >
                <button className="button-count" onClick={decrement}>-</button>
                <span className="span-count">{countItem}</span>
                <button className="button-count" onClick={increment}>+</button>
            </div>
            <div>
                <button className="button-add" onClick={onAddCond}>Agregar al Carrito</button>
            </div>
            
        </>
    )
}
export default ItemCount;