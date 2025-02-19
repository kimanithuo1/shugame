import Layout from "../components/Layout"
import { FiUser, FiShoppingBag, FiHeart, FiSettings } from "react-icons/fi"

const AccountPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">My Account</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#2C2C2C] p-6 rounded-lg">
            <FiUser size={32} className="text-[#FF6B6B] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Profile</h2>
            <p className="text-[#CCCCCC]">View and edit your personal information</p>
          </div>
          <div className="bg-[#2C2C2C] p-6 rounded-lg">
            <FiShoppingBag size={32} className="text-[#FF6B6B] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Orders</h2>
            <p className="text-[#CCCCCC]">Track and manage your orders</p>
          </div>
          <div className="bg-[#2C2C2C] p-6 rounded-lg">
            <FiHeart size={32} className="text-[#FF6B6B] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Wishlist</h2>
            <p className="text-[#CCCCCC]">View and manage your wishlist</p>
          </div>
          <div className="bg-[#2C2C2C] p-6 rounded-lg">
            <FiSettings size={32} className="text-[#FF6B6B] mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">Settings</h2>
            <p className="text-[#CCCCCC]">Manage your account settings</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AccountPage

