import { Link } from "react-router-dom"

const PopularCategories = () => {
  const categories = [
    {
      id: "sneakers",
      name: "Sneakers",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "streetwear",
      name: "Streetwear",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "accessories",
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1611923134239-b9be5819e592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "limited-editions",
      name: "Limited Editions",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {categories.map((category) => (
        <Link key={category.id} to={`/category/${category.id}`} className="group">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PopularCategories

