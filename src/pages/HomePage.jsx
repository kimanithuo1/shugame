import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import TrendingBrands from "../components/TrendingBrands"
import PopularCategories from "../components/PopularCategories"
import { FiArrowRight } from "react-icons/fi"

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max 90",
      price: 129.99,
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-max-90-mens-shoes-6n3vKB.png",
    },
    {
      id: 2,
      name: "Adidas Yeezy Boost 350",
      price: 219.99,
      image: "https://image.goat.com/attachments/product_template_pictures/images/000/052/785/original/6172.png",
    },
    {
      id: 3,
      name: "Jordan 1 Retro High",
      price: 169.99,
      image: "https://secure-images.nike.com/is/image/DotCom/CT0418_018_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
    {
      id: 4,
      name: "Adidas NMD R1",
      price: 139.99,
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5ae250f1c4bad9eb3aba0014141ef_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg",
    },
  ]

  const newArrivals = [
    {
      id: 5,
      name: "Nike Dunk Low",
      price: 99.99,
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/dunk-low-mens-shoes-NGpz5q.png",
    },
    {
      id: 6,
      name: "Converse Chuck 70",
      price: 79.99,
      image:
        "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw715cd415/images/a_107/162058C_A_107X1.jpg",
    },
    {
      id: 7,
      name: "Vans Old Skool",
      price: 59.99,
      image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$583x583$",
    },
    {
      id: 8,
      name: "Puma RS-X",
      price: 109.99,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/368845/01/sv01/fnd/PNA/fmt/png/RS-X-Reinvention-Men's-Sneakers",
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
            to="/products"
            className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-bold py-3 px-8 rounded-full text-lg hover:from-[#FF8E53] hover:to-[#FF6B6B] transition-all duration-300 inline-flex items-center"
          >
            Shop Now <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Trending Brands Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ECDC4] mb-8">Trending Brands</h2>
          <TrendingBrands />
          <div className="text-center mt-8">
            <Link to="/brands" className="text-[#FF6B6B] hover:text-[#FF8E53] font-semibold">
              View All Brands <FiArrowRight className="inline ml-2" />
            </Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ECDC4] mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-[#FF6B6B] hover:text-[#FF8E53] font-semibold">
              View All Products <FiArrowRight className="inline ml-2" />
            </Link>
          </div>
        </section>

        {/* Popular Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ECDC4] mb-8">Popular Categories</h2>
          <PopularCategories />
        </section>

        {/* New Arrivals Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#4ECDC4] mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/new-releases" className="text-[#FF6B6B] hover:text-[#FF8E53] font-semibold">
              View All New Releases <FiArrowRight className="inline ml-2" />
            </Link>
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
              Learn More About Us <FiArrowRight className="inline ml-2" />
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

