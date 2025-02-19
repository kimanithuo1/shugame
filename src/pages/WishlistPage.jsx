import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

const WishlistPage = () => {
  const wishlistItems = [
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
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">My Wishlist</h1>
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-[#CCCCCC]">Your wishlist is empty.</p>
        )}
      </div>
    </Layout>
  )
}

export default WishlistPage

