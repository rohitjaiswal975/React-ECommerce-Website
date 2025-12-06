import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contex/ShopContex";
import TitleSection from "../Compontes/TitleSection";
import image from "../assets/image";

const Cart = () => {
  const { cartItems, currency, products } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          data.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(data);
  }, [cartItems]);

  return (
    <section className="border-t pt-15">
      <div className="text-2xl mb-3">
        <TitleSection text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, id) => {
          const productsData = products.find(
            (product) => product.id === item.id
          );

          return (
            <div
              key={id}
              className="py-5 border-t border-b text-gray-900 grid grid-cols-[4fr_0.5fr] sm:grid-cols-[4fr_2fr-0.5fr] items-center gap-5"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-15 sm:w-20"
                  src={productsData.image[0]}
                  alt="products"
                />
                <div>
                  <p className="text-xs sm:text-lg font-semibold">
                    {productsData.name}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="font-bold">
                      {currency}
                      {productsData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-amber-200">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input className="border-black max-w-10 sm:max-w-20 pz-1 sm:px-2 py1" type="number" min={1} defaultValue={item.quantity} />
              <img src={image.deleted} className="w-4 mr-4 sm:w-5 cursor-pointer" alt="bin"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
