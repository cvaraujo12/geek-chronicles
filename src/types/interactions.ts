import { User } from './auth'

export interface Comment {
  id: string
  content: string
  author: User
  articleId: string
  parentId?: string
  replies?: Comment[]
  likes: number
  createdAt: string
  updatedAt: string
}

export interface Like {
  id: string
  userId: string
  articleId: string
  createdAt: string
}

export interface Share {
  id: string
  userId: string
  articleId: string
  platform: 'twitter' | 'facebook' | 'linkedin' | 'whatsapp'
  createdAt: string
}

export interface Bookmark {
  id: string
  userId: string
  articleId: string
  createdAt: string
  collection?: string
}

export interface Rating {
  id: string
  userId: string
  articleId: string
  value: number
  comment?: string
  createdAt: string
  updatedAt: string
} 