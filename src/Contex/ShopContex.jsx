import { createContext, useEffect, useState } from "react";
import products from "../assets/Proucts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fees = 20;
  const [search, setsearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const Navigate = useNavigate();

  const addToCart = ({ itemsId, size }) => {
    let cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Oops! You forgot to choose a size 😊");
      return;
    }

    if (cartData[itemsId]) {
      if (cartData[itemsId][size]) {
        cartData[itemsId][size] = cartData[itemsId][size] + 1;
      } else {
        cartData[itemsId][size] = 1;
      }
    } else {
      cartData[itemsId] = {};
      cartData[itemsId][size] = 1;
    }

    setcartItems(cartData);
  };

  // useEffect(() => {
  //     console.log(cartItems)
  // },[cartItems])

  const getCartCounter = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount = totalCount + cartItems[items][item];
          }
        } catch (err) {
            
        }
      }
    }

    return totalCount;
  };

  const updateQuantity = async (itemsId,size,quantity) => {
      let cartData = structuredClone(cartItems)

      cartData[itemsId][size] = quantity;

      setcartItems(cartData)
  }

  const getCartAmount = () => {
      let totalAmount = 0

      for (const items in cartItems) {
        let productsInfo = products.find((product) => product.id === items)
        for (const item in cartItems[items]) {
          try {
              if(cartItems[items][item]) {
                totalAmount += productsInfo.price * cartItems[items][item]
              }
          }catch (err) {

          }
        }
      }
      return totalAmount;
  }

  const value = {
    products,
    currency,
    delivery_fees,
    search,
    setsearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCounter,
    updateQuantity,
    getCartAmount,
    Navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
