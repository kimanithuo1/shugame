import Layout from "../components/Layout"

const SizeGuidePage = () => {
  const sizeCharts = {
    sneakers: [
      { us: "7", uk: "6", eu: "40", cm: "25" },
      { us: "8", uk: "7", eu: "41", cm: "26" },
      { us: "9", uk: "8", eu: "42", cm: "27" },
      { us: "10", uk: "9", eu: "43", cm: "28" },
      { us: "11", uk: "10", eu: "44", cm: "29" },
    ],
    clothing: [
      { size: "S", chest: "36-38", waist: "30-32", hips: "36-38" },
      { size: "M", chest: "38-40", waist: "32-34", hips: "38-40" },
      { size: "L", chest: "40-42", waist: "34-36", hips: "40-42" },
      { size: "XL", chest: "42-44", waist: "36-38", hips: "42-44" },
    ],
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#4ECDC4] mb-8">Size Guide</h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Sneaker Sizes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[#CCCCCC]">
                <thead>
                  <tr className="bg-[#2C2C2C]">
                    <th className="p-2 text-left">US</th>
                    <th className="p-2 text-left">UK</th>
                    <th className="p-2 text-left">EU</th>
                    <th className="p-2 text-left">CM</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeCharts.sneakers.map((size, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#2C2C2C]"}>
                      <td className="p-2">{size.us}</td>
                      <td className="p-2">{size.uk}</td>
                      <td className="p-2">{size.eu}</td>
                      <td className="p-2">{size.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-[#FF6B6B] mb-4">Clothing Sizes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-[#CCCCCC]">
                <thead>
                  <tr className="bg-[#2C2C2C]">
                    <th className="p-2 text-left">Size</th>
                    <th className="p-2 text-left">Chest (inches)</th>
                    <th className="p-2 text-left">Waist (inches)</th>
                    <th className="p-2 text-left">Hips (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeCharts.clothing.map((size, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-[#1A1A1A]" : "bg-[#2C2C2C]"}>
                      <td className="p-2">{size.size}</td>
                      <td className="p-2">{size.chest}</td>
                      <td className="p-2">{size.waist}</td>
                      <td className="p-2">{size.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default SizeGuidePage

