import { useCallback, useEffect, useState } from 'react'
import { User, Session, AuthError } from '@/types'

interface UseAuthReturn {
  user: User | null
  isLoading: boolean
  error: AuthError | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<AuthError | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = localStorage.getItem('session')
        if (session) {
          const parsedSession: Session = JSON.parse(session)
          if (new Date(parsedSession.expiresAt) > new Date()) {
            setUser(parsedSession.user)
          } else {
            localStorage.removeItem('session')
          }
        }
      } catch (err) {
        console.error('Erro ao verificar autenticação:', err)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true)
      setError(null)
      // TODO: Implementar chamada real à API
      const response = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Falha na autenticação')
      }

      const session: Session = await response.json()
      localStorage.setItem('session', JSON.stringify(session))
      setUser(session.user)
    } catch (err) {
      setError({
        code: 'auth/failed',
        message: 'Falha ao fazer login',
        status: 401,
      })
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      setIsLoading(true)
      // TODO: Implementar chamada real à API
      await fetch('/api/auth/signout', { method: 'POST' })
      localStorage.removeItem('session')
      setUser(null)
    } catch (err) {
      console.error('Erro ao fazer logout:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signUp = useCallback(async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true)
      setError(null)
      // TODO: Implementar chamada real à API
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
      })

      if (!response.ok) {
        throw new Error('Falha no cadastro')
      }

      const session: Session = await response.json()
      localStorage.setItem('session', JSON.stringify(session))
      setUser(session.user)
    } catch (err) {
      setError({
        code: 'auth/signup-failed',
        message: 'Falha ao criar conta',
        status: 400,
      })
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    user,
    isLoading,
    error,
    signIn,
    signOut,
    signUp,
  }
} 