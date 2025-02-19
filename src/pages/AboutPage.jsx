import Layout from "../components/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">About ShuGame</h1>
        <div className="bg-[#2C2C2C] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Our Story</h2>
          <p className="text-[#CCCCCC] mb-4">
            ShuGame was founded in 2023 by a group of sneaker enthusiasts who wanted to create a one-stop destination
            for all things streetwear and sneakers. Our passion for urban fashion and footwear drives us to curate the
            best selection of products from top brands and up-and-coming designers.
          </p>
          <p className="text-[#CCCCCC]">
            We believe that sneakers and streetwear are more than just clothing – they're a form of self-expression and
            a way to connect with like-minded individuals. That's why we're committed to building a community around our
            brand, where sneakerheads and fashion lovers can come together to share their passion.
          </p>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Our Mission</h2>
          <p className="text-[#CCCCCC]">
            At ShuGame, our mission is to provide sneaker enthusiasts and streetwear aficionados with the latest and
            greatest products, exceptional customer service, and a platform to express their unique style. We strive to:
          </p>
          <ul className="list-disc list-inside text-[#CCCCCC] mt-4 space-y-2">
            <li>Curate a diverse selection of high-quality sneakers and streetwear</li>
            <li>Offer exclusive releases and limited-edition collaborations</li>
            <li>Provide a seamless shopping experience, from browsing to delivery</li>
            <li>Foster a community of passionate individuals who share our love for urban fashion</li>
            <li>Stay at the forefront of streetwear trends and sneaker culture</li>
          </ul>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Our Team</h2>
          <p className="text-[#CCCCCC] mb-4">
            The ShuGame team is made up of dedicated professionals who are passionate about sneakers, streetwear, and
            providing the best possible experience for our customers. From our product curators to our customer service
            representatives, everyone at ShuGame is committed to excellence.
          </p>
          <p className="text-[#CCCCCC]">
            We're always looking for talented individuals to join our team. If you're passionate about sneakers and
            streetwear, check out our{" "}
            <a href="/careers" className="text-[#4ECDC4] hover:underline">
              Careers page
            </a>{" "}
            for current opportunities.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

