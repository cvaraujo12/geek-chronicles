'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BaseContent } from '@/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { useInteractions } from '@/hooks'

interface ArticleCardProps {
  article: BaseContent
  userId?: string
}

export function ArticleCard({ article, userId }: ArticleCardProps) {
  const { isLiked, isBookmarked, toggleLike, toggleBookmark } = useInteractions({
    articleId: article.id,
    userId,
  })

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video w-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 384px, (min-width: 1040px) 288px, (min-width: 780px) 384px, 288px"
          priority
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">
            {new Date(article.publishedAt).toLocaleDateString('pt-BR')}
          </span>
          <span className="text-xs text-muted-foreground">•</span>
          <Link
            href={`/categoria/${article.category.slug}`}
            className="text-xs text-primary hover:underline"
          >
            {article.category.name}
          </Link>
        </div>
        <CardTitle className="line-clamp-2">
          <Link href={`/artigo/${article.slug}`} className="hover:underline">
            {article.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {article.excerpt}
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleLike()}
            disabled={!userId}
            aria-label={isLiked ? 'Remover curtida' : 'Curtir'}
          >
            {isLiked ? '❤️' : '🤍'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleBookmark()}
            disabled={!userId}
            aria-label={isBookmarked ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            {isBookmarked ? '🔖' : '🏷️'}
          </Button>
        </div>
        <Link href={`/artigo/${article.slug}`}>
          <Button variant="outline" size="sm">
            Ler mais
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
} 