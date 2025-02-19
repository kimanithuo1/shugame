import Layout from "../components/Layout"
import { FiTrash2 } from "react-icons/fi"

const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "Air Max 90",
      price: 129.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Yeezy Boost 350",
      price: 219.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1631984564919-1f6b2313a71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ]

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Shopping Cart</h1>
        {cartItems.length > 0 ? (
          <div>
            <div className="bg-[#2C2C2C] rounded-lg p-6 mb-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b border-gray-600 py-4 last:border-b-0"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{item.name}</h3>
                      <p className="text-[#CCCCCC]">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 px-2 py-1 bg-[#1A1A1A] text-white rounded-md mr-4"
                    />
                    <button className="text-[#FF6B6B] hover:text-[#FF8E53]">
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Total: ${total.toFixed(2)}</h2>
              <button className="bg-[#4ECDC4] text-white px-6 py-2 rounded-md hover:bg-[#3DBDAD] transition-colors duration-300">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-[#CCCCCC]">Your cart is empty.</p>
        )}
      </div>
    </Layout>
  )
}

export default CartPage

