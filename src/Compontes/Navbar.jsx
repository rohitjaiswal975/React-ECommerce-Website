import { Link, NavLink } from "react-router-dom";
import image from "../assets/image";
import { useContext, useState } from "react";
import logo from "../assets/logowebsite.jpg";
import { ShopContext } from "../Contex/ShopContex";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const [show, setShow] = useState(false);
  const { setShowSearch, getCartCounter } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-6 bg-gray-100 text-gray-800 shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 select-none">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="text-2xl font-bold tracking-wide">LOGO</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700 font-medium">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center transition ${
                  isActive ? "text-black" : "text-gray-700"
                }`
              }
            >
              {item.name}
              <hr className="w-2/4 border-none h-[2px] bg-gray-800 hidden" />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={image.search}
          className="w-5 cursor-pointer"
        />

        {/* Profile Dropdown */}
        <div className="group relative">
          <Link to="/login">
            <img src={image.profile} className="w-5 cursor-pointer" />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-4 bg-white text-gray-600 shadow-lg rounded-xl">
              <p className="cursor-pointer hover:text-black transition">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black transition">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black transition">
                Log Out
              </p>
            </div>
          </div>
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={image.cart} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCounter()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShow(true)}
          src={image.menu}
          alt="menu"
          className="w-6 cursor-pointer sm:hidden"
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all shadow-xl ${
          show ? "w-64" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-800 h-full">
          <div
            onClick={() => setShow(false)}
            className="flex items-center gap-3 p-4 border-b cursor-pointer"
          >
            <img src={image.cross} alt="close" className="w-4" />
            <p className="text-sm font-medium">Back</p>
          </div>

          {navItems.map((item, id) => (
            <NavLink
              onClick={() => setShow(false)}
              className="py-4 pl-6 border-b text-sm tracking-wide hover:bg-gray-50 transition"
              key={id}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
