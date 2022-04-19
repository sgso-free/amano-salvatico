import { useState, useEffect } from "react";
import './../styles/ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [countItem, setCount] = useState(0);
    

    useEffect (() => {
        setCount(initial);
    },[])

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
    const AddCond = () =>{
        if (stock>0 && countItem>0) {
            onAdd(countItem); 
        } 
    }
    return (
        <>            
            <div >
                <button className="button-count" onClick={decrement}>-</button>
                <span className="span-count">{countItem}</span>
                <button className="button-count" onClick={increment}>+</button>  
                <button className="button-add" onClick={AddCond}>Agregar al Carrito</button>
            </div>
           
            
        </>
    )
}
export default ItemCount;