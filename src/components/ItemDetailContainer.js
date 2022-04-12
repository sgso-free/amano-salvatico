import { useEffect, useState } from "react";
import productFetch from "../utils/productFetch";
import ItemDetail from "./ItemDetail";

const  {products} = require('../utils/products');

const ItemDetailContainer = (params) => {
    const [dato, setDato] = useState([]);

    useEffect(() => {
        productFetch(2000,products[1])
            .then(result => setDato(result))
            .catch(err=> console.log(err))
    },[]);

    
    return(
        <div> 
            <ItemDetail item={dato} />          
        </div>
    )
}
export default ItemDetailContainer;