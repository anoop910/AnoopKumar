// src/ContactPage.js
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center text-gray-800">
      {/* Contact Section */}
      <section className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-500">Contact Us</h1>
        <p className="text-gray-600 text-center mt-2">
          Have questions or want to get in touch? Fill out the form below!
        </p>

        {/* Contact Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10 text-center">
          <p className="text-gray-700">Or reach us at:</p>
          <p className="text-gray-600 mt-2">
            📞 +1 (123) 456-7890 <br />
            📧 contact@example.com <br />
            🏠 123 Main St, City, Country
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
