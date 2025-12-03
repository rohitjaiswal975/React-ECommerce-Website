import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contex/ShopContex";
import TitleSection from "./TitleSection";
import ProductItems from "./ProductItems";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestproduct, setlatestproducts] = useState([]);

  useEffect(() => {
    setlatestproducts(products.slice(0,10));
  }, []);

  return (
    <section className="my-10">
      <div className="text-center py-8 text-3xl">
        <TitleSection text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nobis iure officiis, mollitia ratione, eaque labore suscipit minus.
        </p>
      </div>
      {/* display products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestproduct.map((item,id) => (
            <ProductItems key={id} id={item.id} name={item.name} image={item.image} price={item.price}/>
          ))
        }
      </div>
    </section>
  );
};

export default LatestCollection;
