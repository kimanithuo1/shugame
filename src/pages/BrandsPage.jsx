import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const BrandsPage = () => {
  const brands = [
    { id: 1, name: "Nike", logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" },
    { id: 2, name: "Adidas", logo: "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo.png" },
    { id: 3, name: "Jordan", logo: "https://1000logos.net/wp-content/uploads/2018/03/Air-Jordan-Logo.png" },
    { id: 4, name: "Yeezy", logo: "https://1000logos.net/wp-content/uploads/2020/07/Yeezy-Logo.png" },
    { id: 5, name: "New Balance", logo: "https://1000logos.net/wp-content/uploads/2020/09/New-Balance-Logo.png" },
    { id: 6, name: "Converse", logo: "https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png" },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Our Brands</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <Link key={brand.id} to={`/brand/${brand.id}`} className="group">
              <div className="bg-[#2C2C2C] rounded-lg p-4 flex items-center justify-center h-40 transition-all duration-300 group-hover:bg-[#3C3C3C]">
                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="max-h-24 max-w-full" />
              </div>
              <h3 className="text-center mt-2 text-white group-hover:text-[#4ECDC4]">{brand.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BrandsPage

