import Layout from "../components/Layout"

const FAQPage = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in their original condition with tags attached.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website or the carrier's website.",
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#2C2C2C] rounded-lg p-6">
              <h2 className="text-xl font-semibold text-[#FF6B6B] mb-2">{faq.question}</h2>
              <p className="text-[#CCCCCC]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default FAQPage

