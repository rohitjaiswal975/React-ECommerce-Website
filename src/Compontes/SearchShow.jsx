import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contex/ShopContex";
import image from "../assets/image";
import { useLocation } from "react-router-dom";

const SearchShow = () => {
  const { search, setsearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setvisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setvisible(true);
    }else {
        setvisible(false);
    }
  }, [location,showSearch]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-100 text-center">
      <div className="inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <img className="w-4" src={image.search} alt="search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-5 mb-0.5 cursor-pointer"
        src={image.cross}
        alt="cross"
      />
    </div>
  ) : null;
};

export default SearchShow;
