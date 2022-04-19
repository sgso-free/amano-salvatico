import './../styles/Checkout.css';
import {Link} from 'react-router-dom';

const Checkout = () =>{
    return (
        <>
            <Link to={'/cart'} className="button-checkout" >Finalizar Compra</Link>
        </>
    )
}

export default Checkout;