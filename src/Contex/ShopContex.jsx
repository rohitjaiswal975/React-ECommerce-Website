import { createContext, useState } from "react";
import products from "../assets/Proucts"; 

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fees = 20;
    const [search,setsearch] = useState("")
    const [showSearch , setShowSearch] = useState(false)

    const value = {
        products,
        currency,
        delivery_fees,
        search,
        setsearch,
        showSearch,
        setShowSearch,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
