
import CartList from "./CartList";
import {CartContext} from "./CartContext";
import { useContext } from 'react';
import {Link} from "react-router-dom"; 
import { increment, serverTimestamp, updateDoc, doc} from "firebase/firestore";
import db from '../utils/firebaseConfig';
import { createOrderInFirestore } from "../utils/firestoreFetch";

const Cart = () =>{

    const cartContextLocal = useContext(CartContext);

    const createOrder  = () => {
        //Create a list with the cartlist item to add to the order product list 
        const itemOrder = cartContextLocal.cartList.map(item => (
                {
                    id: item.idItem,
                    title: item.nameItem,
                    qty: item.qtyItem,    
                    price: item.costItem
                }            
         ));

         //Update the quantity of each product in the cartList
         cartContextLocal.cartList.forEach(async (element) => {
             const itemRef = doc(db,"products", element.idItem);
             await updateDoc(itemRef, {
                 stock: increment(-element.qtyItem)
             });
         });

         ///Create the order
         let order = {
             buyer: {
                 name: "Famoso 1",
                 email: "famoso@vip.com",
                 phone: "123456789"
             },
             total: cartContextLocal.calcTotal(),
             items: itemOrder,
             date: serverTimestamp()
         };

        console.log("Order New:",order);

        //Insert the order in the Firestore
        //if ok, delete the cartList and show a alert with the id of the order, 
        //ifnot show in the console the error
        createOrderInFirestore(order)
            .then(result => {alert("La orden fue creada. Ref. Order: " + result.id);cartContextLocal.removeList();})
            .catch(err => console.log(err));
 

    }

    return (

        <div className="box-cart">
            <h1>Tu Carrito</h1>
            <div className="bar=button">
                <Link to='/' className="button-return-cart" >Continuar Comprando</Link>
                {
                    (cartContextLocal.cartList.length >0) && <button onClick = {()=>cartContextLocal.removeList()} className="button-borrar-all" >Borrar Carrito</button>
                }                 
            </div>
            <div className="box-mid-cart">
                <CartList items={cartContextLocal.cartList} />
                {
                    (cartContextLocal.cartList.length >0) && <div className="box-ckeckout border border-dark">
                        <table class="table">
                            <tbody>
                                <tr> 
                                    <td>Subtotal</td>
                                    <td className="text-right">{cartContextLocal.calcSubTotal()}</td> 
                                </tr>
                                <tr> 
                                    <td>Impuestos</td>
                                    <td className="text-right">{cartContextLocal.calcTaxes()}</td> 
                                </tr>
                                <tr> 
                                    <td>Total</td>
                                    <td className="text-right">{cartContextLocal.calcTotal()}</td> 
                                </tr>
                                <tr> 
                                    <td>Cantidad Articulos</td>
                                    <td className="text-right">{cartContextLocal.calcItemsQty()}</td> 
                                </tr>
                                <tr> 
                                    <td colspan="2" className="text-center"> <button onClick = {()=>createOrder()} className="button-finish" >Terminar Compra</button></td> 
                                </tr>
                            </tbody>
                        </table> 
                     </div>
                 } 


            </div>
        </div>
    )
}

export default Cart;