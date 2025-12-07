import React from "react";
import TitleSection from "../Compontes/TitleSection";
import image from "../assets/image";

const About = () => {
  return (
    <section className="px-4 md:px-10">
      <div className="text-2xl text-center pt-8 border-t">
        <TitleSection text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-10">
        <img className="w-full md:max-w-[450px] rounded-2xl shadow-lg" src={image.about} alt="About us" />

        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-gray-900 leading-relaxed">
          <p>
            Our company is dedicated to delivering high-quality solutions that combine creativity,
            innovation, and reliability. We believe in building products that not only meet
            expectations but also create meaningful value for our customers.
          </p>
          <p>
            Over the years, we’ve built a reputation for commitment, trust, and customer
            satisfaction. Our team works with passion and attention to detail to ensure every
            project reflects our core values.
          </p>
          <b className="text-black text-xl mt-2">Our Mission</b>
          <p>
            Our mission is to deliver innovative and reliable solutions that create real value for
            our customers. We aim to continuously grow, improve, and build long-term trust through
            quality, commitment, and excellence.
          </p>
        </div>
      </div>

      {/* WHY CHOOSE US Section */}
      <div className="text-4xl py-4 text-center">
        <TitleSection text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
          <p className="text-gray-700">
            Our professionals bring years of expertise, ensuring that every project is executed with
            precision and skill.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
          <p className="text-gray-700">
            We maintain strict quality standards to ensure our solutions consistently exceed client
            expectations.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
          <p className="text-gray-700">
            Your satisfaction is our priority. We tailor each solution to meet your unique goals and
            requirements.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Innovation Driven</h3>
          <p className="text-gray-700">
            We embrace creativity and modern technologies to bring fresh, impactful ideas to life.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
          <p className="text-gray-700">
            We value your time and ensure all projects are completed within the agreed timeframe.
          </p>
        </div>

        <div className="p-6 rounded-2xl shadow-md bg-white hover:shadow-xl transition-all duration-300">
          <h3 className="text-xl font-semibold mb-3">Long-Term Support</h3>
          <p className="text-gray-700">
            Our relationship doesn’t end at delivery — we provide ongoing support for long-term
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;