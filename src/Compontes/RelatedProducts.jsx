import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Contex/ShopContex"
import TitleSection from "./TitleSection"
import ProductItems from "./ProductItems"

const RelatedProducts = ({category , Subcategory}) => {
    const {products} = useContext(ShopContext)
    const [related , setReleated] = useState([])


    useEffect(() => {
    if (products.length > 0) {
        let productsCopy = products.slice()

        productsCopy = productsCopy.filter((item) => category === item.category)
        productsCopy = productsCopy.filter((item) => Subcategory === item.Subcategory)

        setReleated(productsCopy.slice(0,5))
    }

    },[products])

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
            <TitleSection text1={"RELATED"} text2={"PRODUCTS"}/>
      </div>
      <div className="gap-y-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {
                related.map((item,id) => ( 
                    <ProductItems key={id} id={item.id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
      </div>
    </div>
  )
}

export default RelatedProducts
