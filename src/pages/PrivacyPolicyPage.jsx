import Layout from "../components/Layout"

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Privacy Policy</h1>
        <div className="bg-[#2C2C2C] rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">1. Introduction</h2>
            <p className="text-[#CCCCCC]">
              At ShuGame, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you use our website and services.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">2. Information We Collect</h2>
            <p className="text-[#CCCCCC]">We collect various types of information, including:</p>
            <ul className="list-disc list-inside text-[#CCCCCC] mt-2 space-y-1">
              <li>Personal information (e.g., name, email address, shipping address)</li>
              <li>Payment information</li>
              <li>Device and browser information</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#CCCCCC]">We use your information to:</p>
            <ul className="list-disc list-inside text-[#CCCCCC] mt-2 space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support</li>
              <li>Improve our products and services</li>
              <li>Send promotional emails and updates (with your consent)</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">4. Data Security</h2>
            <p className="text-[#CCCCCC]">
              We implement a variety of security measures to maintain the safety of your personal information. However,
              no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee
              absolute security.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">5. Your Rights</h2>
            <p className="text-[#CCCCCC]">
              You have the right to access, correct, or delete your personal information. You may also object to or
              restrict certain processing of your data. To exercise these rights, please contact us using the
              information provided in the "Contact Us" section.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">6. Changes to This Policy</h2>
            <p className="text-[#CCCCCC]">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">7. Contact Us</h2>
            <p className="text-[#CCCCCC]">
              If you have any questions or concerns about our Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc list-inside text-[#CCCCCC] mt-2 space-y-1">
              <li>Email: privacy@shugame.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Sneaker Street, Footwear City, FC 12345</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage

