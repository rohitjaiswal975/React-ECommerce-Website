import image from "../assets/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-500 mt-2">
      {/* left side of hero section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center  gap-3">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base ">
              OUR BEST SELLERS
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2.5">
            <p className="font-semibold text-sm md:text-base ">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* right side of hero section */}
      <div>
        <img
          className="h-[450px] sm:h-[500px] lg:h-[600px]"
          src={image.latest}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
