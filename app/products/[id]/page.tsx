import { createClient } from '@/lib/supabase/server'
import { Product } from '@/lib/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await createClient()

  const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/products" 
          className="text-blue-600 hover:text-blue-700 font-semibold mb-6 inline-block"
        >
          ← Back to Products
        </Link>

        {/* Product Details Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl">
          {/* Product Name */}
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>

          {/* Price */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-slate-600 text-sm font-semibold">Price</p>
            <p className="text-4xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
          </div>

          {/* Description */}
          {product.description && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-2">Description</h2>
              <p className="text-slate-700 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Metadata */}
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-600 text-sm">Product ID</p>
                <p className="text-slate-900 font-mono text-sm">{product.id}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-600 text-sm">Created</p>
                <p className="text-slate-900">{new Date(product.created_at).toLocaleDateString()}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-slate-600 text-sm">Updated</p>
                <p className="text-slate-900">{new Date(product.updated_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}