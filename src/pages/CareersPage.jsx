import Layout from "../components/Layout"

const CareersPage = () => {
  const jobOpenings = [
    { title: "Product Manager", department: "Product", location: "New York, NY" },
    { title: "Frontend Developer", department: "Engineering", location: "Remote" },
    { title: "Customer Service Representative", department: "Customer Support", location: "Miami, FL" },
    { title: "Social Media Manager", department: "Marketing", location: "Los Angeles, CA" },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Careers at ShuGame</h1>
        <div className="bg-[#2C2C2C] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Join Our Team</h2>
          <p className="text-[#CCCCCC] mb-4">
            At ShuGame, we're always on the lookout for passionate individuals who share our love for sneakers and
            streetwear. We offer a dynamic work environment where creativity, innovation, and teamwork are valued and
            rewarded.
          </p>
          <p className="text-[#CCCCCC]">
            If you're excited about the latest trends in urban fashion and want to be part of a growing company that's
            shaping the future of online retail, we want to hear from you!
          </p>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Why Work at ShuGame?</h2>
          <ul className="list-disc list-inside text-[#CCCCCC] space-y-2">
            <li>Competitive salary and benefits package</li>
            <li>Employee discounts on our products</li>
            <li>Opportunities for professional growth and development</li>
            <li>Flexible work arrangements, including remote options for some positions</li>
            <li>A fun and inclusive company culture</li>
            <li>Regular team-building events and activities</li>
          </ul>
        </div>
        <div className="bg-[#2C2C2C] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Current Job Openings</h2>
          {jobOpenings.map((job, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
              <p className="text-[#CCCCCC] mb-1">Department: {job.department}</p>
              <p className="text-[#CCCCCC] mb-2">Location: {job.location}</p>
              <button className="bg-[#4ECDC4] text-white px-4 py-2 rounded-md hover:bg-[#3DBDAD] transition-colors duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default CareersPage

