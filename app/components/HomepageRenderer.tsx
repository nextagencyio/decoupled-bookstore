'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { BookOpen, Bookmark, Coffee, Pen, Globe, Star, MapPin, Phone, Mail, Clock } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const communityLife = [
  { icon: BookOpen, title: 'Curated Collections', description: 'Thoughtfully selected titles across fiction, non-fiction, poetry, and rare editions' },
  { icon: Bookmark, title: 'Book Clubs', description: 'Join our monthly reading groups for lively discussions and literary community' },
  { icon: Coffee, title: 'Reading Room', description: 'Cozy cafe with artisan coffee, perfect for losing yourself in a good book' },
  { icon: Pen, title: 'Author Events', description: 'Meet acclaimed authors for readings, signings, and intimate conversations' },
  { icon: Globe, title: 'World Literature', description: 'Translated works and international voices from every corner of the globe' },
  { icon: Star, title: 'Staff Picks', description: 'Personal recommendations from our passionate team of booksellers' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&q=80&fit=crop', alt: 'Bookstore shelves' },
  { src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80&fit=crop', alt: 'Open book on table' },
  { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80&fit=crop', alt: 'Library reading room' },
  { src: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80&fit=crop', alt: 'Stacked books' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Featured Content Preview */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              New Arrivals
            </h2>
            <div className="w-16 h-0.5 bg-accent-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The latest additions to our carefully curated shelves
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Literary Fiction', desc: 'Award-winning novels and debut voices that illuminate the human condition through masterful storytelling.' },
              { title: 'Rare & Antiquarian', desc: 'First editions, signed copies, and beautifully bound volumes for the discerning collector.' },
              { title: 'Poetry & Essays', desc: 'Contemporary and classic verse alongside thought-provoking essays that challenge and inspire.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border-l-4 border-primary-700 p-8 hover:shadow-md transition-all duration-300">
                <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                <Link href="/books" className="text-primary-700 font-medium text-sm hover:text-primary-800 transition-colors">
                  Browse Collection &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Life / Icon Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              More Than a Bookstore
            </h2>
            <div className="w-16 h-0.5 bg-accent-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A literary haven for readers, writers, and dreamers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {communityLife.map((item) => {
              const IconComponent = item.icon
              return (
                <div key={item.title} className="bg-[#faf8f5] border-l-4 border-primary-400 p-8 group hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 mb-5 group-hover:bg-primary-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Inside The Gilded Page
            </h2>
            <div className="w-16 h-0.5 bg-accent-600 mx-auto mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Where stories live and readers gather
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Info Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-2">Visit Our Bookstore</h2>
            <div className="w-16 h-0.5 bg-accent-400 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <Clock className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Store Hours</h3>
              <p className="text-primary-200 text-sm">Mon-Sat: 9am - 9pm</p>
              <p className="text-primary-200 text-sm">Sunday: 10am - 6pm</p>
            </div>
            <div>
              <BookOpen className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Book Club</h3>
              <p className="text-primary-200 text-sm">First Thursday, 7pm</p>
            </div>
            <div>
              <Pen className="w-8 h-8 text-accent-400 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-semibold mb-1">Author Events</h3>
              <p className="text-primary-200 text-sm">Check calendar for dates</p>
            </div>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Rich Footer */}
      <footer className="bg-[#f5f0eb] border-t border-primary-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-semibold text-primary-900 mb-4">The Gilded Page</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                An independent bookstore celebrating the art of reading since 1987. Curated collections, author events, and a community of passionate readers.
              </p>
              <div className="flex items-center space-x-2 text-gray-500">
                <MapPin className="w-4 h-4 text-primary-700" />
                <span className="text-sm">312 Literary Lane, Portland, OR 97205</span>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/books" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Books</Link></li>
                <li><Link href="/events" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Events</Link></li>
                <li><Link href="/staff-picks" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">Staff Picks</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-primary-700 transition-colors text-sm">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Services</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>Special Orders</li>
                <li>Book Clubs</li>
                <li>Gift Cards</li>
                <li>Author Events</li>
                <li>Reading Room</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary-900 mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-primary-700 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">(503) 555-0187</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary-700 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">hello@gildedpage.com</span>
                </li>
                <li className="flex items-start space-x-2 mt-4">
                  <Clock className="w-4 h-4 text-primary-700 flex-shrink-0 mt-0.5" />
                  <div className="text-gray-600 text-sm">
                    <p>Mon-Sat: 9am - 9pm</p>
                    <p>Sunday: 10am - 6pm</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} The Gilded Page. All rights reserved.</p>
            <p className="text-gray-400 text-xs mt-2 md:mt-0">Where every page turns to gold</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
