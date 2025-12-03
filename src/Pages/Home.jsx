import BestSellerItem from "../Compontes/BestSellerItem"
import HeroSection from "../Compontes/HeroSection"
import LatestCollection from "../Compontes/LatestCollection"
import NewsLetterBox from "../Compontes/NewsLetterBox"
import OurPolicySection from "../Compontes/OurPolicySection"

const Home = () => {
  return (
    <main>
      <HeroSection />
      <LatestCollection />
      <BestSellerItem />
      <OurPolicySection />
      <NewsLetterBox />
    </main>
  )
}

export default Home
