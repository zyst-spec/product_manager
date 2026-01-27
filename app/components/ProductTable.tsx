import { Product } from '@/lib/types'

export function ProductTable({ products }: { products: Product[] }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100 border-b">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Product Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr 
              key={product.id}
              className={`border-b transition hover:bg-blue-50 ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              <td className="px-6 py-4 text-sm font-medium text-slate-900">
                {product.name}
              </td>
              <td className="px-6 py-4 text-sm font-bold text-blue-600">
                THB {product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600 max-w-xs truncate">
                {product.description || '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
