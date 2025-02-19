import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

const NewReleasesPage = () => {
  const newReleases = [
    {
      id: 1,
      name: "Air Max 2023",
      price: 159.99,
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Yeezy Boost 380",
      price: 229.99,
      image:
        "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 3,
      name: "Jordan 1 High OG",
      price: 179.99,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    },
    {
      id: 4,
      name: "Adidas 4DFWD",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1431&q=80",
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">New Releases</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newReleases.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default NewReleasesPage

