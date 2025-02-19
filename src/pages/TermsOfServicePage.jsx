import Layout from "../components/Layout"

const TermsOfServicePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Terms of Service</h1>
        <div className="bg-[#2C2C2C] rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#CCCCCC]">
              By accessing or using the ShuGame website and services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">2. Use of the Website</h2>
            <p className="text-[#CCCCCC]">
              You agree to use the website for lawful purposes only and in a way that does not infringe upon the rights
              of others or restrict their use of the website.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">3. Product Information and Pricing</h2>
            <p className="text-[#CCCCCC]">
              We strive to provide accurate product information and pricing. However, errors may occur. We reserve the
              right to correct any errors and to change or update information at any time without prior notice.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">4. Ordering and Payment</h2>
            <p className="text-[#CCCCCC]">
              By placing an order, you are making an offer to purchase the products. All orders are subject to
              acceptance and availability. We reserve the right to refuse any order.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">5. Shipping and Delivery</h2>
            <p className="text-[#CCCCCC]">
              Shipping times and costs may vary depending on the delivery location and selected shipping method. We are
              not responsible for delays caused by customs or other factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">6. Returns and Refunds</h2>
            <p className="text-[#CCCCCC]">
              Please refer to our Returns Policy for information on returns, exchanges, and refunds. Certain items may
              be exempt from returns or exchanges.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">7. Intellectual Property</h2>
            <p className="text-[#CCCCCC]">
              All content on the ShuGame website, including text, graphics, logos, and images, is the property of
              ShuGame or its content suppliers and is protected by copyright laws.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">8. Limitation of Liability</h2>
            <p className="text-[#CCCCCC]">
              ShuGame shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the website or services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">9. Changes to Terms</h2>
            <p className="text-[#CCCCCC]">
              We reserve the right to modify these Terms of Service at any time. Your continued use of the website after
              any changes indicates your acceptance of the modified terms.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">10. Contact Us</h2>
            <p className="text-[#CCCCCC]">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <ul className="list-disc list-inside text-[#CCCCCC] mt-2 space-y-1">
              <li>Email: legal@shugame.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Sneaker Street, Footwear City, FC 12345</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default TermsOfServicePage

