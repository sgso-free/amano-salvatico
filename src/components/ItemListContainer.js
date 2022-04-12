import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import productFetch from "../utils/productFetch";
import ItemList from "./ItemList";
import ItemDetailContainer from "./ItemDetailContainer";

const  {products} = require('../utils/products');

const ItemListContainer = (params) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        productFetch(2000,products)
            .then(result => setDatos(result))
            .catch(err=> console.log(err))
    },[]);

    const addCart = (qty) => {
        console.log("Agregaste " + qty + " elementos al carrito.");
        return;
    }
    return(
        <div>
            {params.gretting}
            <ItemList items={datos} />
            <ItemCount stock={5} initial={1} onAdd={addCart}/>       
            <ItemDetailContainer item={1}/>     
        </div>
    )
}
export default ItemListContainer;