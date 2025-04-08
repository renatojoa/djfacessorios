import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"
import FeaturedProduct from "@/components/featured-product"
import StoreLocations from "@/components/store-locations"
import WhatsAppContact from "@/components/whatsapp-contact"
import { getProducts, getFeaturedProduct } from "@/lib/products"

export default async function Home() {
  const featuredProduct = await getFeaturedProduct()
  const bestSellers = await getProducts({ category: "best-sellers", limit: 4 })
  const newArrivals = await getProducts({ category: "new-arrivals", limit: 4 })

  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
        <Image
          src="/placeholder.svg?height=600&width=1600"
          alt="DJF Acessórios"
          width={1600}
          height={600}
          className="w-full h-[60vh] object-cover"
          priority
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-lg space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Acessórios Eletrônicos de Alta Qualidade
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

      {/* Categories Section */}
      <section className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Capas", icon: "/placeholder.svg?height=80&width=80" },
            { name: "Películas", icon: "/placeholder.svg?height=80&width=80" },
            { name: "Fones", icon: "/placeholder.svg?height=80&width=80" },
            { name: "Teclados", icon: "/placeholder.svg?height=80&width=80" },
            { name: "Caixas de Som", icon: "/placeholder.svg?height=80&width=80" },
            { name: "Acessórios", icon: "/placeholder.svg?height=80&width=80" },
          ].map((category, index) => (
            <Link key={index} href={`/produtos?categoria=${category.name.toLowerCase()}`}>
              <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors group">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-black p-2 mb-3">
                    <Image
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      width={40}
                      height={40}
                      className="h-10 w-10"
                    />
                  </div>
                  <h3 className="font-medium text-white group-hover:text-green-400">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="bg-gray-900 py-10">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-white">Produto em Destaque</h2>
            <Badge variant="outline" className="border-green-500 text-green-400">
              Oferta da Semana
            </Badge>
          </div>
          <FeaturedProduct product={featuredProduct} />
        </div>
      </section>

      {/* Products Tabs Section */}
      <section className="container px-4 md:px-6">
        <Tabs defaultValue="best-sellers" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-white">Nossos Produtos</h2>
            <TabsList className="bg-gray-900">
              <TabsTrigger
                value="best-sellers"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
              >
                Mais Vendidos
              </TabsTrigger>
              <TabsTrigger
                value="new-arrivals"
                className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
              >
                Novidades
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="best-sellers" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                <Link href="/produtos?categoria=mais-vendidos">Ver Todos</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="new-arrivals" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                <Link href="/produtos?categoria=novidades">Ver Todos</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Store Locations Section */}
      <section className="bg-gray-900 py-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Nossas Lojas</h2>
          <StoreLocations />
        </div>
      </section>

      {/* WhatsApp Contact Section */}
      <section className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Entre em Contato</h2>
        <WhatsAppContact />
      </section>
    </div>
  )
}
