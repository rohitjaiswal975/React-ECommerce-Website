import { useContext } from "react";
import { ShopContext } from "../Contex/ShopContex";
import { Link } from "react-router-dom";

const ProductItems = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-800 cursor-pointer" to={`/products${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-125 transitio ease-in-out h-[20rem] "
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItems;

