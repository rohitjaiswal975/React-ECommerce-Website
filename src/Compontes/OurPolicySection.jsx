import image from "../assets/image";

const OurPolicySection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text:text-sm md:text-base text-gray-900  ">
      <div>
        <img className="w-16 m-auto mb-5" src={image.exchange} alt="" />
        <p className="font-bold">Exchange Policy</p>
        <p className="text-sm">Free Exchange on All Products</p>
      </div>
      <div>
        <img className="w-16 m-auto mb-5" src={image.truck} alt="" />
        <p className="font-bold">7-Day Return Policy</p>
        <p className="text-sm">Return Products Within 7 Days</p>
      </div>
      <div>
        <img className="w-16 m-auto mb-5" src={image.support} alt="" />
        <p className="font-bold">Best Customer Support</p>
        <p className="text-sm">24/7 Customer Support Available</p>
      </div>
    </div>
  );
};

export default OurPolicySection;
