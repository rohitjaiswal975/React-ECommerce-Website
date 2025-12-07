import { useContext } from "react";
import { ShopContext } from "../Contex/ShopContex";
import TitleSection from "./TitleSection";

const CartTotal = () => {
  const { currency, delivery_fees, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full border border-gray-300 rounded-lg p-5 bg-white shadow-sm">
      <div className="text-2xl mb-4">
        <TitleSection text1={"CARTS"} text2={"AMOUNT"} />
      </div>

      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between text-gray-700">
          <p>Subtotal</p>
          <p>{currency}{getCartAmount()}.00</p>
        </div>
        <hr className="border-gray-300" />

        <div className="flex justify-between text-gray-700">
          <p>Shipping fees</p>
          <p>{delivery_fees}.00</p>
        </div>
        <hr className="border-gray-300" />

        <div className="flex justify-between text-base font-semibold text-gray-900">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fees}.00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
