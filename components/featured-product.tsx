import Link from "next/link"
import Image from "next/image"
import { ShoppingCart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface FeaturedProductProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    originalPrice: number
    image: string
    endDate: string
    stockPercentage: number
  }
}

export default function FeaturedProduct({ product }: FeaturedProductProps) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-center">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={product.image || "/placeholder.svg?height=600&width=600"}
          alt={product.name}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-red-500 text-white text-lg py-1.5">-{discount}%</Badge>
      </div>
      <div className="space-y-4">
        <div>
          <Badge variant="outline" className="mb-2 border-green-500 text-green-400">
            Oferta da Semana
          </Badge>
          <h3 className="text-2xl font-bold text-white">{product.name}</h3>
        </div>
        <p className="text-gray-400">{product.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </span>
          <span className="text-xl text-gray-400 line-through">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.originalPrice)}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-amber-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">Oferta termina em: {product.endDate}</span>
            </div>
            <span className="text-sm text-gray-400">{product.stockPercentage}% em estoque</span>
          </div>
          <Progress value={product.stockPercentage} className="h-2 bg-gray-800" />
        </div>
        <div className="flex flex-col gap-2 sm:flex-row pt-2">
          <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Comprar Agora
          </Button>
          <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
            <Link href={`/produtos/${product.id}`}>Ver Detalhes</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
