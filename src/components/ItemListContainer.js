import { useEffect, useState } from "react"; 
import ItemList from "./ItemList"; 
import {useParams} from 'react-router-dom'
import { firestoreFetchProductsBy } from "../utils/firestoreFetch";

const  {products} = require('../utils/products');

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {idCategory} = useParams();
     

    //Componente DidUpdate
    useEffect(() => {
             firestoreFetchProductsBy(idCategory)
                .then(result => setDatos(result))
                .catch(err=> console.log(err))
    },[idCategory]);
 
    return(
        <div>
            <ItemList items={datos} />
        </div>
    )
}
export default ItemListContainer;