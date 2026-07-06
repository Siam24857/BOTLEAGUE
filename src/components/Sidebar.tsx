
const categories = [
  { name: 'All Products', count: 156 },
  { name: 'Electronics', count: 42 },
  { name: 'Clothing', count: 38 },
  { name: 'Home & Garden', count: 28 },
  { name: 'Sports', count: 22 },
  { name: 'Books', count: 15 },
  { name: 'Toys', count: 11 },
]

const priceRanges = [
  'Under $25',
  '$25 - $50',
  '$50 - $100',
  '$100 - $200',
  'Over $200',
]

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-sm p-6 hidden lg:block">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <button className="flex items-center justify-between w-full text-left text-gray-600 hover:text-pink-500 transition-colors group">
                <span className="group-hover:font-medium">{category.name}</span>
                <span className="text-sm text-gray-400">({category.count})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
        <ul className="space-y-3">
          {priceRanges.map((range, index) => (
            <li key={index}>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
                <span className="text-gray-600 group-hover:text-pink-500 transition-colors">{range}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating</h3>
        <ul className="space-y-3">
          {[4, 3, 2, 1].map((rating) => (
            <li key={rating}>
              <label className="flex items-center space-x-3 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 text-pink-500 rounded focus:ring-pink-500" />
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                  <span className="ml-2 text-gray-600 text-sm">& Up</span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
