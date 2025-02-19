import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: "Air Max 90", price: 129.99, image: "/images/air-max-90.jpg" },
    { id: 2, name: "Yeezy Boost 350", price: 219.99, image: "/images/yeezy-boost-350.jpg" },
    { id: 3, name: "Jordan 1 Retro", price: 169.99, image: "/images/jordan-1-retro.jpg" },
    { id: 4, name: "Adidas NMD", price: 139.99, image: "/images/adidas-nmd.jpg" },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-[#FF6B6B] mb-4">Welcome to ShuGame</h1>
          <p className="text-[#CCCCCC] text-xl">Discover the latest in streetwear and sneakers.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#4ECDC4] mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#4ECDC4] mb-6">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomePage

