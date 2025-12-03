import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contex/ShopContex";
import TitleSection from "./TitleSection";
import ProductItems from "./ProductItems";

const BestSellerItem = () => {
  const { products } = useContext(ShopContext);
  const [BestSellers, SetBestSellers] = useState([]);

  useEffect(() => {
    const BestProducts = products.filter((item) => item.bestseller);
    SetBestSellers(BestProducts.slice(0, 5));
  },[]);

  return (
    <section className="my-10">
      <div className="text-center text-3xl py-8">
        <TitleSection text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-900">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo
          quasi aliquid! Quo maiores dolores, obcaecati ea dolor quos, atque.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-5">
        {
            BestSellers.map((item,id) => (
                <ProductItems key={id} id={item.id} name={item.name} image={item.image} price={item.price}/>
            ))
        }
      </div>
    </section>
  );
};

export default BestSellerItem;
