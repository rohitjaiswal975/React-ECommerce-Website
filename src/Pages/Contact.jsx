

const Contact = () => {
  return (
    <section className="px-6 py-10 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Contact Us</h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you! Get in touch with us.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-white shadow-md p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
          <p className="text-gray-700 mb-4">
            Have any questions or want to work with us? Reach out through the details below.
          </p>

          <div className="space-y-4 text-gray-800">
            <p><strong>📍 Address:</strong> 123 Business Street, Your City, Country</p>
            <p><strong>📞 Phone:</strong> +91 ***** *****</p>
            <p><strong>📧 Email:</strong> info@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md p-6 rounded-2xl space-y-5">
          <h3 className="text-2xl font-semibold mb-2">Send Us a Message</h3>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;