"use client"

import { useParams } from "react-router-dom"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"

const CategoryPage = () => {
  const { category } = useParams()

  // Mock data for category and products
  const categoryData = {
    id: category,
    name: category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, " "),
    description: `This is the ${category} category page.`,
  }

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 129.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 219.99,
      image: "https://via.placeholder.com/150",
    },
    // Add more products here
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-2">{categoryData.name}</h1>
        <p className="text-[#CCCCCC] mb-6">{categoryData.description}</p>
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

export default CategoryPage

