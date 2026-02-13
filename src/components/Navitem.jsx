
const Navitem = ({ item }) => {
    return (
        <a className='relative text-gray-700 hover:text-[#8BAC3E]' href={item.path}>
            {item.name}
            {item.badge && (
        <span className="absolute -right-3 -top-3 text-[8px] px-2 py-1 bg-[#E7462D] text-white rounded-md">
          {item.badge}
        </span>
      )}
        </a>
    )
}

export default Navitem