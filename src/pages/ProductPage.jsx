"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../components/Layout"

const ProductPage = () => {
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState(null)

  // Mock product data (replace with actual data fetching)
  const product = {
    id,
    name: "Air Max 90",
    price: 129.99,
    description:
      "The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle outsole, stitched overlays and classic TPU accents. Fresh colors give a modern look while Max Air cushioning adds comfort to your journey.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"],
    images: ["/images/air-max-90.jpg", "/images/air-max-90-2.jpg", "/images/air-max-90-3.jpg"],
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 2}`}
                  className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#FF6B6B] mb-4">{product.name}</h1>
            <p className="text-2xl font-semibold text-white mb-4">${product.price.toFixed(2)}</p>
            <p className="text-[#CCCCCC] mb-6">{product.description}</p>
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Select Size:</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md ${
                      selectedSize === size
                        ? "bg-[#4ECDC4] text-white"
                        : "bg-[#2C2C2C] text-white hover:bg-[#4ECDC4] hover:text-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-bold py-3 px-6 rounded-md hover:from-[#FF8E53] hover:to-[#FF6B6B] transition-all duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage

