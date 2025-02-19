"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FiSearch, FiUser, FiShoppingCart, FiMenu } from "react-icons/fi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-[#1A1A1A] bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#FF6B6B]">
          ShuGame
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/category/sneakers" className="text-white hover:text-[#4ECDC4]">
            Sneakers
          </Link>
          <Link to="/category/streetwear" className="text-white hover:text-[#4ECDC4]">
            Streetwear
          </Link>
          <Link to="/new-arrivals" className="text-white hover:text-[#4ECDC4]">
            New Arrivals
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-[#4ECDC4]">
            <FiSearch size={20} />
          </button>
          <button className="text-white hover:text-[#4ECDC4]">
            <FiUser size={20} />
          </button>
          <button className="text-white hover:text-[#4ECDC4]">
            <FiShoppingCart size={20} />
          </button>
          <button className="md:hidden text-white hover:text-[#4ECDC4]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#2C2C2C] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/category/sneakers"
              className="text-white hover:text-[#4ECDC4]"
              onClick={() => setIsMenuOpen(false)}
            >
              Sneakers
            </Link>
            <Link
              to="/category/streetwear"
              className="text-white hover:text-[#4ECDC4]"
              onClick={() => setIsMenuOpen(false)}
            >
              Streetwear
            </Link>
            <Link to="/new-arrivals" className="text-white hover:text-[#4ECDC4]" onClick={() => setIsMenuOpen(false)}>
              New Arrivals
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

