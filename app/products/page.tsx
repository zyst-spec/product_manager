import { createClient } from '@/lib/supabase/server'
import { Product } from '@/lib/types'
import { ProductTable } from '@/app/components/ProductTable'
import { SearchBar } from '@/app/components/SearchBar'
import { Pagination } from '@/app/components/Pagination'
import Link from 'next/link'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const supabase = await createClient()

  const page = Number(params.page) || 1
  const limit = 10
  const offset = (page - 1) * limit

  let query = supabase.from('products').select('*', { count: 'exact' })

  const search = params.search as string
  if (search) {
    query = query.ilike('name', `%${search}%`)
  }

  query = query.range(offset, offset + limit - 1).order('created_at', { ascending: false })

  const { data: products, error, count } = await query

  if (error) {
    console.error(error)
    return <div>Error loading products</div>
  }

  const totalPages = Math.ceil((count || 0) / limit)

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Products</h1>
            {count !== undefined && (
              <p className="text-slate-600 mt-2">Showing {count} total products</p>
            )}
          </div>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* Product Grid */}
        {products && products.length > 0 ? (
          <>
            <ProductTable products={products} />
            <Pagination currentPage={page} totalPages={totalPages} />
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No products found</p>
          </div>
        )}
      </div>
    </div>
  )
}