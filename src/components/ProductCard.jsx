import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:transform group-hover:scale-105 group-hover:shadow-xl">
        <div className="relative aspect-w-1 aspect-h-1">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#4ECDC4] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[#FF6B6B] font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

