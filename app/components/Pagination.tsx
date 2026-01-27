'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`/products?${params.toString()}`)
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      {currentPage > 1 && (
        <button 
          onClick={() => goToPage(currentPage - 1)} 
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition duration-200 font-semibold text-slate-700"
        >
          ← Previous
        </button>
      )}
      <div className="bg-white px-6 py-2 rounded-lg border border-slate-300">
        <span className="text-slate-700 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
      </div>
      {currentPage < totalPages && (
        <button 
          onClick={() => goToPage(currentPage + 1)} 
          className="px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition duration-200 font-semibold text-slate-700"
        >
          Next →
        </button>
      )}
    </div>
  )
}