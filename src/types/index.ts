export * from './auth'
export * from './content'
export * from './interactions'

export type ApiResponse<T> = {
  data: T
  status: number
  message?: string
}

export type ApiError = {
  code: string
  message: string
  status: number
  details?: Record<string, unknown>
}

export type PaginatedResponse<T> = {
  data: T[]
  meta: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}

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