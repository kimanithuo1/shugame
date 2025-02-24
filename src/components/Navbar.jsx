"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiHeart } from "react-icons/fi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navStyles = {
    nav: "sticky top-0 z-50 bg-[#79483f] bg-opacity-95 backdrop-blur-md border-b border-[#E0B1AB]",
    container: "container mx-auto px-4 py-4",
    logo: "text-2xl font-bold text-[#F3E5D6]",
    link: "text-[#F3E5D6] hover:text-[#E0B1AB] transition-colors duration-200",
    saleLink: "text-[#E0B1AB] hover:text-[#F3E5D6] transition-colors duration-200",
    mobileMenu: "md:hidden mt-4 py-4 border-t border-[#E0B1AB]",
    mobileLink: "block py-2 text-[#F3E5D6] hover:text-[#E0B1AB] transition-colors duration-200",
    iconButton: "text-[#E0B1AB] hover:text-[#F3E5D6] transition-colors duration-200",
  }

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.container}>
        <div className="flex items-center justify-between">
          <Link to="/" className={navStyles.logo}>
            ShuGame
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className={navStyles.link}>
              All Products
            </Link>
            <Link to="/category/sneakers" className={navStyles.link}>
              Sneakers
            </Link>
            <Link to="/category/streetwear" className={navStyles.link}>
              Streetwear
            </Link>
            <Link to="/brands" className={navStyles.link}>
              Brands
            </Link>
            <Link to="/new-releases" className={navStyles.link}>
              New Releases
            </Link>
            <Link to="/sale" className={navStyles.saleLink}>
              Sale
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/search" className={navStyles.iconButton}>
              <FiSearch size={20} />
            </Link>
            <Link to="/account" className={navStyles.iconButton}>
              <FiUser size={20} />
            </Link>
            <Link to="/wishlist" className={navStyles.iconButton}>
              <FiHeart size={20} />
            </Link>
            <Link to="/cart" className={navStyles.iconButton}>
              <FiShoppingCart size={20} />
            </Link>
            <button className={navStyles.iconButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FiMenu size={24} className="md:hidden" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={navStyles.mobileMenu}>
            <Link to="/products" className={navStyles.mobileLink}>
              All Products
            </Link>
            <Link to="/category/sneakers" className={navStyles.mobileLink}>
              Sneakers
            </Link>
            <Link to="/category/streetwear" className={navStyles.mobileLink}>
              Streetwear
            </Link>
            <Link to="/brands" className={navStyles.mobileLink}>
              Brands
            </Link>
            <Link to="/new-releases" className={navStyles.mobileLink}>
              New Releases
            </Link>
            <Link to="/sale" className={navStyles.saleLink}>
              Sale
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

