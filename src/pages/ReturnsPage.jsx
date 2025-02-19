import Layout from "../components/Layout"

const ReturnsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Returns Policy</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">30-Day Return Policy</h2>
            <p className="text-[#CCCCCC]">
              We offer a 30-day return policy for all unworn items in their original condition with tags attached. If
              you're not satisfied with your purchase, you can return it for a full refund or exchange.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">How to Return</h2>
            <ol className="list-decimal list-inside text-[#CCCCCC] space-y-2">
              <li>Log in to your account and go to your order history.</li>
              <li>Select the item(s) you wish to return and choose a reason for the return.</li>
              <li>Print the provided return label or generate a QR code for label-free, box-free returns.</li>
              <li>Pack the item(s) securely and attach the return label to the package.</li>
              <li>Drop off the package at any authorized shipping location.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Refund Process</h2>
            <p className="text-[#CCCCCC]">
              Once we receive and process your return, we'll issue a refund to your original payment method. This
              typically takes 5-7 business days, depending on your bank or credit card company.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ReturnsPage

