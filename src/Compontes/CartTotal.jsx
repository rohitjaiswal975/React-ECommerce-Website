import { useContext } from "react"
import { ShopContext } from "../Contex/ShopContex"
import TitleSection from "./TitleSection";

const CartTotal = () => {
    const {currency , delivery_fees , getCartAmount} = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <TitleSection text1={"CARTS"} text2={"AMOUNT"}/>
      </div>
      <div className="flex flex-col gap-3 mt-2 text-sm">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping fees</p>
                <p>{delivery_fees}</p>
            </div>
            <hr />
            <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fees}</b>
            </div>
      </div>
    </div>
  )
}

export default CartTotal
