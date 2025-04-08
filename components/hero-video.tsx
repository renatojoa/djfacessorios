"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Autoplay o vídeo quando o componente for montado
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Erro ao reproduzir o vídeo automaticamente:", error)
      })
    }
  }, [])

  return (
    <section className="relative h-[60vh]">
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Vídeo de fundo */}
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        {/* Você pode adicionar múltiplos formatos para compatibilidade com diferentes navegadores */}
        <source src="/maesdia.mp4" type="video/mp4" />
        {/* Fallback para navegadores que não suportam vídeo */}
        Seu navegador não suporta o elemento de vídeo.
      </video>

      {/* Conteúdo sobreposto */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container px-4 md:px-6">
          <div className="max-w-lg space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Acessórios Eletrônicos Perfeitos para sua Mãe
            </h1>
            <p className="text-gray-300 md:text-xl">
              Encontre os melhores acessórios para seus dispositivos eletrônicos na DJF Acessórios.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-black font-medium">
                <Link href="/produtos">Ver Produtos</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green-500 text-green-500 hover:bg-green-500/10"
              >
                <Link href="/lojas">Nossas Lojas</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
