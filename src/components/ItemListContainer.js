import { useEffect, useState } from "react";
import productFetch from "../utils/productFetch";
import ItemList from "./ItemList"; 
import {useParams} from 'react-router-dom'

const  {products} = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();
    console.log("Categoria" + idCategory);

    useEffect(() => {
        productFetch(2000,products.filter(item => idCategory===undefined || item.idCategory === parseInt(idCategory)))
            .then(result => setDatos(result))
            .catch(err=> console.log(err))
    },[datos]);
   
    return(
        <div>
            <ItemList items={datos} />
        </div>
    )
}
export default ItemListContainer;