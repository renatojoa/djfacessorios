"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ShoppingCart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="DJF Acessórios" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
            Início
          </Link>
          <Link href="/produtos" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
            Produtos
          </Link>
          <Link href="/promocoes" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
            Promoções
          </Link>
          <Link href="/lojas" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
            Nossas Lojas
          </Link>
          <Link href="/contato" className="text-sm font-medium text-white hover:text-green-400 transition-colors">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <form className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="w-[200px] pl-8 bg-gray-900 border-gray-800 focus-visible:ring-green-500"
            />
          </form>
          <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Carrinho</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 bg-black md:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container h-full px-4 py-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Fechar menu</span>
          </Button>
          <nav className="flex flex-col gap-6 mt-8">
            <Link
              href="/"
              className="text-lg font-medium text-white hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              href="/produtos"
              className="text-lg font-medium text-white hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="/promocoes"
              className="text-lg font-medium text-white hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Promoções
            </Link>
            <Link
              href="/lojas"
              className="text-lg font-medium text-white hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Nossas Lojas
            </Link>
            <Link
              href="/contato"
              className="text-lg font-medium text-white hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
          </nav>
          <form className="mt-8 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="w-full pl-8 bg-gray-900 border-gray-800 focus-visible:ring-green-500"
            />
          </form>
        </div>
      </div>
    </header>
  )
}
