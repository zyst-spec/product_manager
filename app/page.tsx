import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">Product Manager</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Browse our comprehensive collection of products with easy search and filtering capabilities
        </p>
        <Link 
          href="/products" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 shadow-md"
        >
          Browse Products
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Search</h3>
            <p className="text-slate-600">Find products quickly with our powerful search functionality</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Browse</h3>
            <p className="text-slate-600">Explore our full catalog with easy pagination and navigation</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Details</h3>
            <p className="text-slate-600">View comprehensive product information and pricing</p>
          </div>
        </div>
      </section>
    </main>
  )
}
