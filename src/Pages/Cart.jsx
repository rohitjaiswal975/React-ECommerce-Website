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
    <section className="border-t pt-16">
      <div className="text-3xl mb-6">
        <TitleSection text1={"YOUR"} text2={"CART"} />
      </div>

      <div className="space-y-6">
        {cartData.map((item, id) => {
          const productsData = products.find((product) => product.id === item.id);

          return (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5 grid grid-cols-[4fr_1fr] sm:grid-cols-[4fr_2fr_1fr] items-center gap-6 border border-gray-200"
            >
              <div className="flex items-start gap-5">
                <img
                  className="w-16 sm:w-20 rounded-xl shadow"
                  src={productsData.image[0]}
                  alt="products"
                />

                <div className="space-y-2">
                  <p className="text-base sm:text-lg font-semibold text-gray-800">
                    {productsData.name}
                  </p>

                  <div className="flex items-center gap-3">
                    <p className="text-lg font-bold text-gray-900">
                      {currency}
                      {productsData.price}
                    </p>
                    <p className="px-3 py-1 text-sm rounded-full border bg-amber-300/40 border-amber-300 font-medium">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                className="border border-gray-400 rounded-lg w-14 sm:w-20 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <img
                src={image.deleted}
                className="w-5 sm:w-6 cursor-pointer hover:scale-110 transition-transform"
                alt="bin"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
