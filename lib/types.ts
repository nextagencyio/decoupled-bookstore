
export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalImage {
  url: string
  alt: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

export interface DrupalBook extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  author?: string
  genre?: string
  price?: string
  isbn?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
  staffFavorite?: boolean
}

export interface BookTeaserData {
  nodeBooks: {
    nodes: DrupalBook[]
  }
}

// Keep article alias for shared components
export interface DrupalArticle extends DrupalBook {}

export interface ArticleTeaserData {
  nodeArticles: {
    nodes: DrupalArticle[]
  }
}

export interface DrupalEvent extends DrupalNode {
  body?: {
    processed: string
  }
  eventDate?: string
  location?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface EventData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

export interface DrupalStaffPick extends DrupalNode {
  body?: {
    processed: string
  }
  bookTitle?: string
  reviewerName?: string
  image?: {
    url: string
    alt?: string
    width?: number
    height?: number
    variations?: Array<{
      name: string
      url: string
      width: number
      height: number
    }>
  }
}

export interface StaffPickData {
  nodeStaffPicks: {
    nodes: DrupalStaffPick[]
  }
}

export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  featuresItems?: DrupalFeature[]
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface DrupalFeature {
  id: string
  title: string
  description?: {
    processed: string
  }
  icon?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

export interface StaffPicksData {
  nodeStaffPicks: {
    nodes: DrupalStaffPick[]
  }
}
