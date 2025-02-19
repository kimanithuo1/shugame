import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-[#2C2C2C] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 group-hover:transform group-hover:scale-105">
        <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2">{product.name}</h3>
          <p className="text-[#FF6B6B] font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

