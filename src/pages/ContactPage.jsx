import Layout from "../components/Layout"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#2C2C2C] rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#CCCCCC] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#CCCCCC] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-[#CCCCCC] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 bg-[#1A1A1A] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#4ECDC4] text-white px-6 py-2 rounded-md hover:bg-[#3DBDAD] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className="bg-[#2C2C2C] rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Contact Information</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <FiMail className="text-[#4ECDC4] mr-2" size={20} />
                  <span className="text-[#CCCCCC]">support@shugame.com</span>
                </li>
                <li className="flex items-center">
                  <FiPhone className="text-[#4ECDC4] mr-2" size={20} />
                  <span className="text-[#CCCCCC]">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <FiMapPin className="text-[#4ECDC4] mr-2" size={20} />
                  <span className="text-[#CCCCCC]">123 Sneaker Street, Footwear City, FC 12345</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#2C2C2C] rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Customer Support Hours</h2>
              <p className="text-[#CCCCCC] mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
              <p className="text-[#CCCCCC] mb-2">Saturday: 10:00 AM - 4:00 PM EST</p>
              <p className="text-[#CCCCCC]">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

