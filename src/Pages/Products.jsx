import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Contex/ShopContex";
import star from "../assets/star-icons.png";
import stardull from "../assets/star-dull-icons.png";
import RelatedProducts from "../Compontes/RelatedProducts";

const Products = () => {
  const { productsId } = useParams();
  const { products, currency , cartItems, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setimage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductsData = () => {
    products.map((item) => {
      if (item.id === productsId) {
        setProductsData(item);
        setimage(item.image[0]);
      }
      return null;
    });
  };

  useEffect(() => {
    fetchProductsData();
  }, [productsId]);

  return productsData ? (
    <div className="pt-10 px-6 sm:px-12 bg-white">
      <div className="flex flex-col sm:flex-row gap-10">
        {/* Left Side */}
        <div className="flex sm:flex-col gap-4 sm:w-[12%] overflow-x-auto sm:overflow-visible">
          {productsData.image.map((img, id) => (
            <img
              key={id}
              src={img}
              alt=""
              onClick={() => setimage(img)}
              className="h-20 w-20 object-cover border rounded-md cursor-pointer hover:border-yellow-500 duration-200"
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 flex justify-center items-start">
          <img
            src={image}
            alt="product"
            className="w-full h-[80%] max-w-lg border rounded-lg shadow-sm"
          />
        </div>

        {/* Right Side — Product Info */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold mb-4">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-4">
            <img src={star} alt="" className="w-4 5" />
            <img src={star} alt="" className="w-4 5" />
            <img src={star} alt="" className="w-4 5" />
            <img src={star} alt="" className="w-4 5" />
            <img src={stardull} alt="" className="w-4 5" />
            <p className="pl-2">(400)</p>
          </div>
          <p className="text-xl text-green-700 font-bold mb-2">
            {currency}
            {productsData.price}
          </p>
          <p className="text-gray-600 mb-6">{productsData.description}</p>

          <div className="flex flex-col gap-3 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, id) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border p-3 rounded ${
                    item === size ? "bg-amber-300" : ""
                  }`}
                  key={id}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => addToCart({itemsId:productsData.id,size:size})} className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-4 rounded-lg shadow ">
            Add to Cart
          </button>
          <hr className="mt-5" />
          <div className="text-sm text-gray-600 mt-5 flex flex-col gap-1">
            <p>✔ 100% Original Products</p>
            <p>✔ 7-Day Return & Exchange Policy</p>
            <p>✔ Fast Refund Process</p>
          </div>
        </div>
      </div>
      {/* description and reviwes */}
      <div className="">
      <div className="flex">
        <b className="border px-5 py-3 text-sm">Description</b>
        <p className="border px-5 py-3 text-sm">Reviews (300)</p>
      </div>

      <div className="flex flex-col gap-4 border px-4 py-4 text-sm text-gray-900">
        <p>
          This premium product is crafted with high-quality materials, designed
          to deliver durability, comfort, and long-lasting performance. Perfect
          for everyday use and suitable for all customer needs.
        </p>

        <p>
          Customers love this item for its excellent value and reliability. With
          over 300 positive reviews, it remains one of the top-rated products in
          our collection.
        </p>
      </div>
    </div>
    {/* disply related products */}

    <RelatedProducts category={productsData.category} Subcategory={productsData.Subcategory}/>

    </div>
  ) : (
    <div></div>
  );
};

export default Products;
