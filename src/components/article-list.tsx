import { BaseContent } from '@/types'
import { ArticleCard } from './article-card'
import { Grid } from './ui/grid'

interface ArticleListProps {
  articles: BaseContent[]
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <Grid cols={3} gap="lg">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Grid>
  )
} 