import Layout from "../components/Layout"

const ShippingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Shipping Information</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Domestic Shipping</h2>
            <p className="text-[#CCCCCC]">
              We offer free standard shipping on all domestic orders over $100. For orders under $100, a flat rate of
              $5.99 will be applied. Standard shipping typically takes 3-5 business days.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">International Shipping</h2>
            <p className="text-[#CCCCCC]">
              We ship to most countries worldwide. International shipping rates and delivery times vary depending on the
              destination. Customs fees and import duties may apply and are the responsibility of the customer.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Expedited Shipping</h2>
            <p className="text-[#CCCCCC]">
              For faster delivery, we offer expedited shipping options at checkout. Expedited shipping typically takes
              1-2 business days for domestic orders.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ShippingPage

