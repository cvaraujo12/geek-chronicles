import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Página não encontrada</h1>
      <p className="mb-8 text-muted-foreground">
        A página que você está procurando não existe ou foi removida.
      </p>
      <Link href="/">
        <Button>Voltar para o início</Button>
      </Link>
    </div>
  )
} 