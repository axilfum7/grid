const CategoryCard = ({ item }) => {
  return (
    <li className="bg-[#F0FEEB] rounded-2xl p-8! text-center hover:shadow-lg transition cursor-pointer">
      <img
        src={item.icon}
        alt={item.title}
        className="mx-auto mb-4 w-16"
      />
      <h3 className="font-semibold text-lg">
        {item.title}
      </h3>
      <p className="text-gray-500 text-sm mt-1">
        {item.count}
      </p>
    </li>
  )
}

export default CategoryCard
