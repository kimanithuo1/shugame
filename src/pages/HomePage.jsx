import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import { FiArrowRight } from "react-icons/fi"

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Air Max 90",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Yeezy Boost 350",
      price: 219.99,
      image:
        "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 3,
      name: "Jordan 1 Retro",
      price: 169.99,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    },
    {
      id: 4,
      name: "Adidas NMD",
      price: 139.99,
      image:
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1431&q=80",
    },
  ]

  const newArrivals = [
    {
      id: 5,
      name: "Nike Dunk Low",
      price: 99.99,
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
    },
    {
      id: 6,
      name: "Converse Chuck 70",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
    },
    {
      id: 7,
      name: "Vans Old Skool",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1398&q=80",
    },
    {
      id: 8,
      name: "Puma RS-X",
      price: 109.99,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Step into Style</h1>
          <p className="text-xl md:text-2xl text-[#CCCCCC] mb-8">Discover the latest in streetwear and sneakers</p>
          <Link
            to="/category/sneakers"
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-bold py-3 px-8 rounded-full text-lg hover:from-[#FF8E53] hover:to-[#FF6B6B] transition-all duration-300 inline-flex items-center"
          >
            Shop Now <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Products Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ECDC4] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ECDC4] mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="bg-[#2C2C2C] rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#FF6B6B] mb-4">About ShuGame</h2>
            <p className="text-[#CCCCCC] mb-6">
              ShuGame is your ultimate destination for streetwear and sneakers. We curate the latest trends and iconic
              styles to bring you a cutting-edge shopping experience.
            </p>
            <Link
              to="/about"
              className="text-[#4ECDC4] font-semibold hover:text-[#6BFFB3] transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section>
          <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Stay in the Game</h2>
            <p className="mb-6">Subscribe to our newsletter for exclusive deals and early access to new releases.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md text-[#1A1A1A]"
              />
              <button
                type="submit"
                className="bg-[#1A1A1A] text-white font-bold py-2 px-6 rounded-md hover:bg-[#2C2C2C] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomePage

