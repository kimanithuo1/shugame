"use client"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

const BrandPage = () => {
  const { id } = useParams()

  // Mock data for brand and products
  const brand = {
    id: 1,
    name: "Nike",
    logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png",
    description:
      "Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
  }

  const products = [
    {
      id: 1,
      name: "Air Max 90",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Air Force 1",
      price: 109.99,
      image:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80",
    },
    // Add more products here
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="w-24 h-24 object-contain mr-6" />
          <div>
            <h1 className="text-3xl font-bold text-[#4ECDC4] mb-2">{brand.name}</h1>
            <p className="text-[#CCCCCC]">{brand.description}</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#FF6B6B] mb-6">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BrandPage

