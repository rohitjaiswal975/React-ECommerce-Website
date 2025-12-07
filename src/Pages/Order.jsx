import React, { useContext } from "react";
import { ShopContext } from "../Contex/ShopContex";
import TitleSection from "../Compontes/TitleSection";

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <section className="pt-16 px-4 md:px-8">
      <div className="text-2xl mb-8">
        <TitleSection text1={"My"} text2={"ORDERS"} />
      </div>

      <div className="space-y-6">
        {products.slice(1, 5).map((item, id) => (
          <div
            key={id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-4 md:p-6 border rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
            </div>

            <div className="flex-1">
              <p className="sm:text-lg font-semibold text-gray-800">{item.name}</p>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-700">
                <p className="text-lg font-medium">{currency}{item.price}</p>
                <p>Quantity: 1</p>
                <p>Size: M</p>
              </div>
              <p className="mt-2 text-gray-500 text-sm">
                Date: <span className="text-gray-400">25 Jul, 2025</span>
              </p>
            </div>
            <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">Ready To Ship</p>
                </div>
                <button className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default Order;
