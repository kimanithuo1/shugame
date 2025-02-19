import { Link } from "react-router-dom"
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#FF6B6B] font-bold text-xl mb-4">ShuGame</h3>
            <p className="text-[#CCCCCC]">Your ultimate destination for streetwear and sneakers.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Shipping
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                <FiFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-[#CCCCCC]">
          &copy; {new Date().getFullYear()} ShuGame. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

