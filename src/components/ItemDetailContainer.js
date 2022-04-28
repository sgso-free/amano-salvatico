import { useEffect, useState } from "react";
import productFetch from "../utils/productFetch";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { firestoreFetchOneProd } from "../utils/firestoreFetch";

const  {products} = require('../utils/products');

const ItemDetailContainer = (params) => {
    const [dato, setDato] = useState([]);
    const {idItem} = useParams();
    console.log("Item" + idItem);
     
    /*useEffect(() => {
        productFetch(2000,products.find(itemInL=>itemInL.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err=> console.log(err))
    },[idItem]);*/

    useEffect(() => {
        firestoreFetchOneProd(idItem)
                .then(result => setDato(result))
                .catch(err=> console.log(err))
    },[idItem]);
 
    return(
        <div> 
            <ItemDetail item={dato} />          
        </div>
    )
}
export default ItemDetailContainer;