
import {createContext } from "react";
import { useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ( {children}) => {
    const [cartList,setCartList] = useState([]);

    const addToCart = (item,qty) => {
        let foundItem = cartList.find(itemInL=>itemInL.idItem === item.id);
        if (foundItem===undefined) {
            //Not in list
            let objItem =  {
                idItem: item.id,
                imgItem:item.pictureUrl[0],
                nameItem:item.title,
                qtyItem: qty,
                costItem:item.price                   
            }
            setCartList([...cartList,
                objItem
            ]);
        } else {
            //find in list
            foundItem.qtyItem += qty
        }
        
        console.log("Item Add", item, qty );
        console.log("Cart List:", cartList);
        
    }

    const removeList = () => {
        setCartList([]); 
    }

    const deleteItem = (id) => {

        setCartList(cartList.filter(item=>item.idItem !== id));
        console.log("Item Remove", id);
    }

    return (
        <CartContext.Provider value={{
                        cartList, 
                        addToCart,
                        removeList,
                        deleteItem
                    }
            }> {/*Share more than one param, use doble {{}} so convert to object*/}
                {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;