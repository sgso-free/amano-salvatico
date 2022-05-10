import { useEffect, useState } from "react"; 
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { firestoreFetchOneProd } from "../utils/firestoreFetch";

const  {products} = require('../utils/products');

const ItemDetailContainer = (params) => {
    const [dato, setDato] = useState([]);
    const {idItem} = useParams(); 
    
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