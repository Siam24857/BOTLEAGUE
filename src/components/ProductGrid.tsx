import ProductCard from './ProductCard'

const products = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 128,
    badge: 'Sale'
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 299.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    rating: 4.8,
    reviews: 256,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Portable Power Bank 20000mAh',
    price: 49.99,
    originalPrice: 69.99,
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop',
    rating: 4.3,
    reviews: 89,
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'USB-C Hub Adapter',
    price: 39.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop',
    rating: 4.6,
    reviews: 167,
    badge: null
  },
  {
    id: 5,
    name: 'Wireless Charging Pad',
    price: 29.99,
    originalPrice: 44.99,
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=400&h=400&fit=crop',
    rating: 4.4,
    reviews: 203,
    badge: 'Sale'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker Portable',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    rating: 4.7,
    reviews: 312,
    badge: 'Popular'
  },
  {
    id: 7,
    name: 'Laptop Stand Adjustable',
    price: 34.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    rating: 4.5,
    reviews: 145,
    badge: 'Sale'
  },
  {
    id: 8,
    name: 'Mechanical Keyboard RGB',
    price: 89.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop',
    rating: 4.9,
    reviews: 428,
    badge: 'New'
  },
]

const ProductGrid = () => {
  return (
    <main className="flex-1 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <span className="hover:text-pink-500 cursor-pointer">Home</span>
          <span>/</span>
          <span className="hover:text-pink-500 cursor-pointer">Electronics</span>
          <span>/</span>
          <span className="text-gray-800 font-medium">All Products</span>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Showing 1-8 of 156 results</span>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
              <option>Best Selling</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-10 space-x-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Previous</button>
          <button className="px-4 py-2 bg-pink-500 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">2</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">3</button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">Next</button>
        </div>
      </div>
    </main>
  )
}

export default ProductGrid
