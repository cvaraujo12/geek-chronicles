'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Algo deu errado!</h1>
      <p className="mb-8 text-muted-foreground">
        Desculpe, ocorreu um erro ao processar sua solicitação.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>Tentar novamente</Button>
        <Link href="/">
          <Button variant="outline">Voltar para o início</Button>
        </Link>
      </div>
    </div>
  )
} 