export interface Author {
  id: string
  name: string
  avatar?: string
  bio?: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export interface Tag {
  id: string
  name: string
  slug: string
}

export interface BaseContent {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: Author
  category: Category
  tags: Tag[]
  publishedAt: string
  updatedAt?: string
  featured?: boolean
}

export interface GeekArticle extends BaseContent {
  type: 'comics' | 'games' | 'tv' | 'tech' | 'anime' | 'general'
  rating?: number
  relatedProducts?: {
    name: string
    url: string
  }[]
}

export interface CinemaArticle extends BaseContent {
  type: 'review' | 'analysis' | 'history' | 'profile'
  year?: number
  director?: string
  rating?: number
  movieDetails?: {
    duration: number
    genre: string[]
    cast: string[]
  }
}

export interface MusicArticle extends BaseContent {
  type: 'review' | 'history' | 'profile' | 'analysis'
  artist?: string
  album?: string
  genre?: string[]
  year?: number
  rating?: number
  trackList?: string[]
} 