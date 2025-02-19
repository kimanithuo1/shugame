import { Link } from "react-router-dom"

const TrendingBrands = () => {
  const brands = [
    { id: 1, name: "Nike", logo: "https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" },
    { id: 2, name: "Adidas", logo: "https://1000logos.net/wp-content/uploads/2019/06/Adidas-Logo.png" },
    { id: 3, name: "Jordan", logo: "https://1000logos.net/wp-content/uploads/2016/10/Air-Jordan-Logo-1997.png" },
    { id: 4, name: "Yeezy", logo: "https://1000logos.net/wp-content/uploads/2023/04/Yeezy-logo.png" },
    { id: 5, name: "New Balance", logo: "https://1000logos.net/wp-content/uploads/2017/05/New-Balance-logo.png" },
    { id: 6, name: "Converse", logo: "https://1000logos.net/wp-content/uploads/2021/04/Converse-logo.png" },
    { id: 7, name: "Vans", logo: "https://1000logos.net/wp-content/uploads/2017/07/Vans-Logo.png" },
    { id: 8, name: "Puma", logo: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-logo.png" },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
      {brands.map((brand) => (
        <Link key={brand.id} to={`/brand/${brand.id}`} className="group">
          <div className="bg-[#2C2C2C] rounded-lg p-4 flex items-center justify-center h-24 transition-all duration-300 group-hover:bg-[#3C3C3C]">
            <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="max-h-16 max-w-full" />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default TrendingBrands

