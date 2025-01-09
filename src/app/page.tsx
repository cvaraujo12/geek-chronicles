import { ArticleList } from '@/components/article-list'

const articles = [
  {
    id: '1',
    title: 'O Impacto dos Videogames na Cultura Pop',
    slug: 'impacto-videogames-cultura-pop',
    excerpt:
      'Uma análise profunda sobre como os jogos eletrônicos moldaram o entretenimento moderno.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    author: {
      id: '1',
      name: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Jornalista especializado em cultura pop e tecnologia.',
    },
    category: {
      id: '1',
      name: 'Games',
      slug: 'games',
      description: 'Notícias e análises do mundo dos jogos.',
    },
    tags: [
      { id: '1', name: 'Videogames', slug: 'videogames' },
      { id: '2', name: 'Cultura Pop', slug: 'cultura-pop' },
    ],
    publishedAt: '2024-01-09T12:00:00Z',
  },
  {
    id: '2',
    title: 'A Evolução do Cinema de Super-Heróis',
    slug: 'evolucao-cinema-super-herois',
    excerpt:
      'Como os filmes de super-heróis transformaram a indústria cinematográfica nas últimas décadas.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3',
    author: {
      id: '2',
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      bio: 'Crítica de cinema e especialista em cultura geek.',
    },
    category: {
      id: '2',
      name: 'Cinema',
      slug: 'cinema',
      description: 'Análises e novidades do mundo do cinema.',
    },
    tags: [
      { id: '3', name: 'Super-Heróis', slug: 'super-herois' },
      { id: '4', name: 'Marvel', slug: 'marvel' },
      { id: '5', name: 'DC', slug: 'dc' },
    ],
    publishedAt: '2024-01-08T15:30:00Z',
  },
  {
    id: '3',
    title: 'O Retorno dos Arcades: Nostalgia e Modernidade',
    slug: 'retorno-arcades-nostalgia-modernidade',
    excerpt:
      'Como os fliperamas estão voltando em uma nova onda de entretenimento retrô.',
    content: '',
    coverImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420',
    author: {
      id: '1',
      name: 'João Silva',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      bio: 'Jornalista especializado em cultura pop e tecnologia.',
    },
    category: {
      id: '1',
      name: 'Games',
      slug: 'games',
      description: 'Notícias e análises do mundo dos jogos.',
    },
    tags: [
      { id: '6', name: 'Arcade', slug: 'arcade' },
      { id: '7', name: 'Retrô', slug: 'retro' },
    ],
    publishedAt: '2024-01-07T10:00:00Z',
  },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Últimas Notícias</h1>
      <ArticleList articles={articles} />
    </div>
  )
}
