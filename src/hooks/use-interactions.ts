import { useState, useCallback } from 'react'

interface UseInteractionsProps {
  articleId: string
  userId?: string
}

export function useInteractions({ articleId, userId }: UseInteractionsProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleLike = useCallback(async () => {
    if (!userId) return

    try {
      setIsLoading(true)
      const response = await fetch('/api/interactions/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId, userId }),
      })

      if (response.ok) {
        setIsLiked((prev) => !prev)
      }
    } catch (err) {
      console.error('Erro ao dar like:', err)
    } finally {
      setIsLoading(false)
    }
  }, [articleId, userId])

  const toggleBookmark = useCallback(async () => {
    if (!userId) return

    try {
      setIsLoading(true)
      const response = await fetch('/api/interactions/bookmark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ articleId, userId }),
      })

      if (response.ok) {
        setIsBookmarked((prev) => !prev)
      }
    } catch (err) {
      console.error('Erro ao favoritar:', err)
    } finally {
      setIsLoading(false)
    }
  }, [articleId, userId])

  return {
    isLiked,
    isBookmarked,
    isLoading,
    toggleLike,
    toggleBookmark,
  }
} 