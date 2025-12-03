
const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-900 mt-24">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 py-16 text-sm max-w-6xl mx-auto px-6">
        <div className="space-y-3">
          <p className="text-2xl font-bold tracking-wide">LOGO</p>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            repellendus tempore, libero exercitationem molestiae praesentium
            qui.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xl font-semibold">Company</p>
          <ul className="flex flex-col gap-2 text-gray-700">
            <li className="hover:text-black transition">Home</li>
            <li className="hover:text-black transition">About Us</li>
            <li className="hover:text-black transition">Delivery</li>
            <li className="hover:text-black transition">Privacy Policy</li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-xl font-semibold">Get in Touch</p>
          <ul className="text-gray-700 space-y-1">
            <li>+1-212-676-9807</li>
            <li>company@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <p className="text-sm text-center py-5 text-gray-600">
          © 2025 — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
