import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext()
export const StoreContextProvider = (props)=>{
    const [cartItems, setcartItems] = useState({})
    const addToCart= (itemid)=>{
        if(!cartItems[itemid]){

            setcartItems((prev)=>({...prev,[itemid]:1}))
        }
        else{
             setcartItems((prev)=>({...prev,[itemid]: prev[itemid]+1}))
        }
    }
    const removeFromCart= (itemid)=>{
        setcartItems((prev)=>({...prev,[itemid]: prev[itemid]-1}))

    }
  const getTotalCartAmount = () => {
  let totalAmount = 0;

  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = food_list.find((product) => product.id === Number(item));
      totalAmount += itemInfo.price * cartItems[item];
    }
  }

  return totalAmount;
}
    const contextvalue={
        food_list,
        cartItems,
        setcartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount

    }
    return(
        <StoreContext.Provider value ={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
    

}
export default StoreContextProvider;