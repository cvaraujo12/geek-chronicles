import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'

// Dados mockados para exemplo
const article = {
  id: '1',
  title: 'O Impacto dos Videogames na Cultura Pop',
  slug: 'impacto-videogames-cultura-pop',
  excerpt:
    'Como os jogos eletrônicos moldaram o entretenimento moderno e influenciaram outras mídias.',
  content: `
    Os videogames têm sido uma força transformadora na cultura pop desde seu surgimento. 
    Começando como uma forma simples de entretenimento, eles evoluíram para se tornar uma 
    das indústrias mais lucrativas e influentes do mundo.

    Hoje, os jogos não são apenas uma forma de diversão, mas uma plataforma para contar 
    histórias complexas, explorar temas profundos e criar experiências interativas únicas. 
    Franquias como The Last of Us, que recentemente ganhou uma adaptação para TV, demonstram 
    como os videogames podem transcender seu meio original.

    A influência dos games pode ser vista em diversos aspectos da cultura pop:
    - Cinema e TV: Adaptações de jogos são cada vez mais comuns
    - Música: Trilhas sonoras de games são reconhecidas e premiadas
    - Arte: Estética dos jogos influencia artistas contemporâneos
    - Tecnologia: Inovações dos games impactam outras indústrias

    Com o avanço da tecnologia e a crescente aceitação dos videogames como forma de arte, 
    podemos esperar que sua influência continue a crescer e moldar a cultura pop nos 
    próximos anos.
  `,
  coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=600&fit=crop',
  author: {
    id: '1',
    name: 'João Silva',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
  },
  category: {
    id: '1',
    name: 'Games',
    slug: 'games',
  },
  tags: [
    { id: '1', name: 'Videogames', slug: 'videogames' },
    { id: '2', name: 'Cultura Pop', slug: 'cultura-pop' },
  ],
  publishedAt: '2024-01-09T10:00:00Z',
}

export default function ArticlePage() {
  return (
    <article>
      <div className="relative h-[60vh] w-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0" />
        <Container className="relative h-full">
          <div className="flex h-full flex-col justify-end pb-12">
            <div className="flex items-center gap-2">
              <time
                dateTime={article.publishedAt}
                className="text-sm text-muted-foreground"
              >
                {new Date(article.publishedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <span className="text-sm text-muted-foreground">•</span>
              <Link
                href={`/categoria/${article.category.slug}`}
                className="text-sm text-primary transition-colors hover:text-primary/80"
              >
                {article.category.name}
              </Link>
            </div>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              {article.excerpt}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{article.author.name}</p>
                <p className="text-sm text-muted-foreground">Autor</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          {article.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Link key={tag.id} href={`/tag/${tag.slug}`}>
              <Button variant="outline" size="sm">
                {tag.name}
              </Button>
            </Link>
          ))}
        </div>
      </Container>
    </article>
  )
} 