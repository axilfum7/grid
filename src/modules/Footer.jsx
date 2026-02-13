const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2] py-16 mt-20">
      <div className="containers grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-2xl font-bold text-[#8BAC3E] mb-4">
            elemes.id
          </h2>
          <p className="text-gray-600 text-sm">
            Jakarta Selatan, Indonesia
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Categories</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>Cupcake</li>
            <li>Pizza</li>
            <li>Kebab</li>
            <li>Salmon</li>
            <li>Doughnut</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">About Us</h4>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>FAQ</li>
            <li>Report Problem</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email address"
              className="px-4 py-2 w-full rounded-l-full border"
            />
            <button className="bg-[#8BAC3E] text-white px-6 rounded-r-full">
              SEND
            </button>
          </div>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-12">
        © 2021 ELEMES ID. ALL RIGHTS RESERVED
      </div>
    </footer>
  )
}

export default Footer