import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/providers'
import { Navigation } from '@/components/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Geek Chronicles',
  description: 'Portal digital que reúne as últimas notícias, artigos e reviews focados nas áreas de cultura geek, história do cinema e música pop.',
  keywords: ['geek', 'cinema', 'música', 'cultura pop', 'reviews', 'notícias'],
  authors: [{ name: 'Geek Chronicles Team' }],
  creator: 'Geek Chronicles',
  publisher: 'Geek Chronicles',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
