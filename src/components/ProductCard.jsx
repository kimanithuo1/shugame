import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  const styles = {
    card: "bg-[#F3E5D6] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl",
    imageContainer: "relative aspect-square",
    image: "w-full h-full object-cover",
    overlay: "absolute inset-0 bg-[#79483f] opacity-0 group-hover:opacity-20 transition-opacity duration-300",
    badge: "absolute top-2 left-2 px-2 py-1 rounded-full text-sm font-semibold",
    newBadge: "bg-[#79483f] text-[#F3E5D6]",
    discountBadge: "bg-[#E0B1AB] text-[#79483f]",
    content: "p-4",
    title: "text-[#79483f] font-semibold text-lg mb-2 group-hover:text-[#E0B1AB] transition-colors duration-300",
    priceContainer: "flex items-center justify-between",
    originalPrice: "text-[#79483f]/70 line-through text-sm",
    price: "text-[#79483f] font-bold",
    rating: "flex items-center text-[#E0B1AB]",
  }

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={product.image || "/placeholder.svg"} alt={product.name} className={styles.image} />
          <div className={styles.overlay} />

          {product.isNew && <div className={`${styles.badge} ${styles.newBadge}`}>New</div>}

          {product.discount && <div className={`${styles.badge} ${styles.discountBadge}`}>-{product.discount}%</div>}
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{product.name}</h3>

          <div className={styles.priceContainer}>
            <div className="flex items-center space-x-2">
              {product.originalPrice && (
                <span className={styles.originalPrice}>${product.originalPrice.toFixed(2)}</span>
              )}
              <span className={styles.price}>${product.price.toFixed(2)}</span>
            </div>

            {product.rating && (
              <div className={styles.rating}>
                <span className="text-sm font-medium">{product.rating}</span>
                <span className="text-xs ml-1">★</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard

