import './../styles/Item.css';
import {Link} from "react-router-dom";

const Item = (props) => {
        return(
           <div className="box-item" key={props.id}>
                <p>{props.title}</p> 
                <p><img src={props.image} alt={props.title} height="100" /></p>
                <p><Link to={'/item/'+props.id}  className="button-details" >Ver Detalle</Link></p>
           </div>
        )
}
export default Item;