import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Collecttion from "./Pages/Collecttion"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import DisplayOrder from "./Pages/DisplayOrder"
import Login from "./Pages/Login"
import PlaceOrder from "./Pages/PlaceOrder"
import Cart from "./Pages/Cart"
import Navbar from "./Compontes/Navbar"
import Footer from "./Compontes/Footer"
import SearchShow from "./Compontes/SearchShow"


const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <SearchShow />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collecttion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:productsId" element={<Products />} />
        <Route path="/order" element={<DisplayOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="placeorder" element={<PlaceOrder />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
