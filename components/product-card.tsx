import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProductCardProps {
  product: {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    category: string
    isNew?: boolean
    isSale?: boolean
  }
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className={cn("bg-gray-900 border-gray-800 overflow-hidden group", className)}>
      <Link href={`/produtos/${product.id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg?height=400&width=400"}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.isNew && <Badge className="absolute top-2 left-2 bg-green-500 text-black">Novo</Badge>}
          {product.isSale && <Badge className="absolute top-2 right-2 bg-red-500 text-white">-{discount}%</Badge>}
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="text-xs text-gray-400 mb-1">{product.category}</div>
        <Link href={`/produtos/${product.id}`} className="hover:underline">
          <h3 className="font-medium text-white line-clamp-2 mb-2 group-hover:text-green-400">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.originalPrice)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  )
}
