"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import ProductCard from "../components/ProductCard"
import { FiSearch, FiFilter } from "react-icons/fi"

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [showFilters, setShowFilters] = useState(false)

  const allProducts = [
    {
      id: 1,
      name: "Nike Air Max 90",
      price: 129.99,
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a42a5d53-2f99-4e78-a081-9d07a2d0774a/air-max-90-mens-shoes-6n3vKB.png",
      category: "sneakers",
      brand: "Nike",
    },
    {
      id: 2,
      name: "Adidas Yeezy Boost 350",
      price: 219.99,
      image: "https://image.goat.com/attachments/product_template_pictures/images/000/052/785/original/6172.png",
      category: "sneakers",
      brand: "Adidas",
    },
    {
      id: 3,
      name: "Jordan 1 Retro High",
      price: 169.99,
      image: "https://secure-images.nike.com/is/image/DotCom/CT0418_018_A_PREM?$SNKRS_COVER_WD$&align=0,1",
      category: "sneakers",
      brand: "Jordan",
    },
    {
      id: 4,
      name: "Adidas NMD R1",
      price: 139.99,
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5ae250f1c4bad9eb3aba0014141ef_9366/NMD_R1_Shoes_Black_GZ9256_01_standard.jpg",
      category: "sneakers",
      brand: "Adidas",
    },
    {
      id: 5,
      name: "Nike Dunk Low",
      price: 99.99,
      image:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/dunk-low-mens-shoes-NGpz5q.png",
      category: "sneakers",
      brand: "Nike",
    },
    {
      id: 6,
      name: "Converse Chuck 70",
      price: 79.99,
      image:
        "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw715cd415/images/a_107/162058C_A_107X1.jpg",
      category: "sneakers",
      brand: "Converse",
    },
    {
      id: 7,
      name: "Vans Old Skool",
      price: 59.99,
      image: "https://images.vans.com/is/image/Vans/VN000D3HY28-HERO?$583x583$",
      category: "sneakers",
      brand: "Vans",
    },
    {
      id: 8,
      name: "Puma RS-X",
      price: 109.99,
      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/368845/01/sv01/fnd/PNA/fmt/png/RS-X-Reinvention-Men's-Sneakers",
      category: "sneakers",
      brand: "Puma",
    },
  ]

  const filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand
    return matchesSearch && matchesCategory && matchesBrand
  })

  const categories = ["all", "sneakers", "streetwear", "accessories"]
  const brands = ["all", "Nike", "Adidas", "Jordan", "Converse", "Vans", "Puma"]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Search Products</h1>
        <div className="flex flex-col md:flex-row md:items-center mb-8">
          <form onSubmit={(e) => e.preventDefault()} className="flex-grow mb-4 md:mb-0 md:mr-4">
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="flex-grow px-4 py-2 rounded-l-md bg-[#2C2C2C] text-white focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              />
              <button
                type="submit"
                className="bg-[#4ECDC4] text-white px-4 py-2 rounded-r-md hover:bg-[#3DBDAD] transition-colors duration-300"
              >
                <FiSearch size={24} />
              </button>
            </div>
          </form>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center bg-[#2C2C2C] text-white px-4 py-2 rounded-md hover:bg-[#3C3C3C] transition-colors duration-300"
          >
            <FiFilter className="mr-2" /> Filters
          </button>
        </div>
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div>
              <label htmlFor="category" className="block text-white mb-2">
                Category:
              </label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#2C2C2C] text-white focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="brand" className="block text-white mb-2">
                Brand:
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-[#2C2C2C] text-white focus:outline-none focus:ring-2 focus:ring-[#4ECDC4]"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default SearchPage

