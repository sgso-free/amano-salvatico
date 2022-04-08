import './../styles/Item.css';
const Item = (props) => {
        return(
           <div className="box">
                <p>{props.title}</p> 
                <p><img src={props.image} alt={props.title} height="36" /></p>
                <p><button className="button-details" >Ver Detalle</button></p>
           </div>
        )
}
export default Item;