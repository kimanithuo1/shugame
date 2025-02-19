import { Link } from "react-router-dom"
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-[#FF6B6B] font-bold text-xl mb-4">ShuGame</h3>
            <p className="text-[#CCCCCC]">Your ultimate destination for streetwear and sneakers.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/category/sneakers" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link to="/category/streetwear" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Streetwear
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/new-releases" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  New Releases
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-[#CCCCCC] hover:text-[#4ECDC4]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#2C2C2C]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#CCCCCC] text-sm">&copy; {new Date().getFullYear()} ShuGame. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CCCCCC] hover:text-[#4ECDC4]"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CCCCCC] hover:text-[#4ECDC4]"
              >
                <FiTwitter size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#CCCCCC] hover:text-[#4ECDC4]"
              >
                <FiFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

