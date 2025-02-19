import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import ProductsPage from "./pages/ProductsPage"
import BrandPage from "./pages/BrandPage"
import BrandsPage from "./pages/BrandsPage"
import CategoryPage from "./pages/CategoryPage"
import NewReleasesPage from "./pages/NewReleasesPage"
import SearchPage from "./pages/SearchPage"
import AccountPage from "./pages/AccountPage"
import WishlistPage from "./pages/WishlistPage"
import CartPage from "./pages/CartPage"
import SalePage from "./pages/SalePage"
import FAQPage from "./pages/FAQPage"
import ShippingPage from "./pages/ShippingPage"
import ReturnsPage from "./pages/ReturnsPage"
import SizeGuidePage from "./pages/SizeGuidePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import CareersPage from "./pages/CareersPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsOfServicePage from "./pages/TermsOfServicePage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/brand/:id" element={<BrandPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/new-releases" element={<NewReleasesPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  )
}

export default App

