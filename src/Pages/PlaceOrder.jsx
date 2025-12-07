import React, { useContext, useState } from "react";
import TitleSection from "../Compontes/TitleSection";
import CartTotal from "../Compontes/CartTotal";
import image from "../assets/image";
import { ShopContext } from "../Contex/ShopContex";

const PlaceOrder = () => {
  const [selectedPayment , setselectedPayment] = useState("Cash")
  const {Navigate} = useContext(ShopContext)

  return (
    <section className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-15 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <TitleSection text1={"DELIVERY"} text2={"INFORMATIONS"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
            placeholder="Enter First Name"
          />
          <input
            type="text"
            className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
            placeholder="Enter Last Name"
          />
        </div>
        <input
          type="email"
          className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
          placeholder="Address"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
            placeholder="Pin Code"
          />
          <input
            type="text"
            className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
            placeholder="Contry"
          />
        </div>
        <input
          type="number"
          className="border border-gary-900 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone Number"
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <TitleSection text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-4 flex-col lg:flex-row">
            <div onClick={()=> setselectedPayment("Razopay")} className="flex items-center gap-3 border pt-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${selectedPayment === "Razopay"? "bg-green-500":""} `}></p>
              <img src={image.razopay} className="h-5 mx-4" alt="image"/>
            </div>
            <div onClick={()=> setselectedPayment("Strip")} className="flex items-center gap-3 border pt-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${selectedPayment === "Strip"? "bg-green-500":""} `}></p>
              <img src={image.strip} className="h-5 mx-4" alt="image"/>
            </div>
            <div onClick={()=> setselectedPayment("Cash")} className="flex items-center gap-3 border pt-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${selectedPayment === "Cash"? "bg-green-500":""} `}></p>
              <p className="text-gray-900 text-sm font-bold mx-4">Cash On Delivery</p>
            </div>
          </div>
          <div className="w-full text-emd mt-8">
              <button onClick={() => Navigate("/order")} className="bg-black text-white px-16 py-3 text-sm">Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
