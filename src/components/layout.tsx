import { Navigation } from './navigation'
import { Container } from './ui/container'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t py-6">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Sobre</h3>
              <p className="text-sm text-muted-foreground">
                Geek Chronicles é sua fonte de notícias e artigos sobre cultura geek,
                cinema e música.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/sobre"
                    className="transition-colors hover:text-foreground"
                  >
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a
                    href="/contato"
                    className="transition-colors hover:text-foreground"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="/privacidade"
                    className="transition-colors hover:text-foreground"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="/termos"
                    className="transition-colors hover:text-foreground"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Categorias</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/geek"
                    className="transition-colors hover:text-foreground"
                  >
                    Cultura Geek
                  </a>
                </li>
                <li>
                  <a
                    href="/cinema"
                    className="transition-colors hover:text-foreground"
                  >
                    Cinema
                  </a>
                </li>
                <li>
                  <a
                    href="/musica"
                    className="transition-colors hover:text-foreground"
                  >
                    Música
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Redes Sociais</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Geek Chronicles. Todos os direitos
              reservados.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  )
} 