export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'user' | 'author' | 'editor' | 'admin'
  preferences?: UserPreferences
  createdAt: string
  updatedAt: string
}

export interface UserPreferences {
  theme?: 'light' | 'dark' | 'system'
  newsletter: boolean
  notifications: {
    email: boolean
    push: boolean
  }
  interests: string[]
}

export interface Session {
  user: User
  token: string
  expiresAt: string
}

export interface AuthError {
  code: string
  message: string
  status: number
} 