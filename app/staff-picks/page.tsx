import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_STAFF_PICKS } from '@/lib/queries'
import { StaffPickData } from '@/lib/types'
import Header from '../components/Header'
import StaffPickCard from '../components/StaffPickCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Staff Picks | The Gilded Page',
  description: 'Our booksellers\' favorite recommendations.',
}

async function getStaffPicks() {
  try {
    const client = getClient()
    const data = await client.raw(GET_STAFF_PICKS, { first: 50 })
    return data?.nodeStaffPicks?.nodes || []
  } catch (error) {
    console.error('Error fetching staff picks:', error)
    return []
  }
}

export default async function StaffPicksPage() {
  const items = await getStaffPicks()

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-gray-900 mb-4">Staff Picks</h1>
            <div className="w-24 h-0.5 bg-primary-700 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Personal recommendations from our passionate booksellers.</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-serif font-semibold text-gray-600 mb-2">No Staff Picks Yet</h2>
              <p className="text-gray-500">Staff picks will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item: any) => (<StaffPickCard key={item.id} item={item} />))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
