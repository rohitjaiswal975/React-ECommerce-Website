import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contex/ShopContex";
import image from "../assets/image";
import TitleSection from "../Compontes/TitleSection";
import ProductItems from "../Compontes/ProductItems";

const Collecttion = () => {
  const { products ,search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [Subcategory, setSubCategory] = useState([]);
  const [sort , setsort] = useState("Relavent")

  const toggleCartegory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (Subcategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyfilter = () => {
    let productsCopy = products.slice();

    if(showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (Subcategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        Subcategory.includes(item.Subcategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let sortcopy = filterProducts.slice();

    switch (sort) {
      case "High":
        setFilterProducts(sortcopy.sort((a, b) => b.price - a.price));
        break;

      case "Low":
        setFilterProducts(sortcopy.sort((a, b) => a.price - b.price));
        break;

      default:
        applyfilter();
        break;
    }
  };

  useEffect(() => {
    applyfilter();
  }, [category, Subcategory,search,showSearch]);

  useEffect(() => {
    sortProducts();
  },[sort])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((prev) => !prev)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={image.dropdown}
            alt="dropdown"
            className={`h-4 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* category filter */}
        <div
          className={`border border-gray-500 pl-5 py-3 mt-3 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-extrabold">CATGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-900">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Men"}
                onChange={toggleCartegory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={toggleCartegory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCartegory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subcategroy filter */}
        <div
          className={`border border-gray-500 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-extrabold">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-900">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <TitleSection text1={"ALL"} text2={"COLLECTIONS"} />
          <select onChange={(e) => setsort(e.target.value)} className="border-2 border-gray-400 text-sm px-2">
            <option value="High">High to Low</option>
            <option value="Low">Low to High</option>
            <option value="Relavent">Relavent</option>
          </select>
        </div>

        {/* display products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6">
          {filterProducts.map((item, id) => (
            <ProductItems
              key={id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collecttion;
