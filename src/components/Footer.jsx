import { Link } from "react-router-dom"
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi"

const Footer = () => {
  const styles = {
    footer: "bg-[#F3E5D6] mt-16",
    container: "container mx-auto px-4 py-12",
    title: "text-[#79483f] font-bold text-xl mb-4",
    description: "text-[#79483f]/80",
    sectionTitle: "text-[#79483f] font-semibold mb-4",
    link: "text-[#79483f]/80 hover:text-[#E0B1AB] transition-colors",
    socialIcon: "text-[#79483f] hover:text-[#E0B1AB] transition-colors",
    border: "border-t border-[#E0B1AB]",
    copyright: "text-[#79483f]/70 text-sm",
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className={styles.title}>ShuGame</h3>
            <p className={styles.description}>Your ultimate destination for streetwear and sneakers.</p>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className={styles.link}>
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/category/sneakers" className={styles.link}>
                  Sneakers
                </Link>
              </li>
              <li>
                <Link to="/category/streetwear" className={styles.link}>
                  Streetwear
                </Link>
              </li>
              <li>
                <Link to="/brands" className={styles.link}>
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/new-releases" className={styles.link}>
                  New Releases
                </Link>
              </li>
              <li>
                <Link to="/sale" className={styles.link}>
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className={styles.link}>
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className={styles.link}>
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className={styles.link}>
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FiInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FiTwitter size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FiFacebook size={24} />
              </a>
            </div>
            <div className="space-y-2">
              <Link to="/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className={styles.link}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 ${styles.border}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} ShuGame. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

