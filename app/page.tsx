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
import HeroVideo from "@/components/hero-video"

export default async function Home() {
  const featuredProduct = await getFeaturedProduct()
  const bestSellers = await getProducts({ category: "best-sellers", limit: 4 })
  const newArrivals = await getProducts({ category: "new-arrivals", limit: 4 })

  return (
    <div className="flex flex-col gap-10 pb-10">
      {/* Hero Section with Video */}
      <HeroVideo />

      {/* Categories Section */}
      <section className="container px-4 md:px-6">
  <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Categorias</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
    {[
      { name: "Capas", icon: "/case_djf.jpg" },
      { name: "Películas", icon: "/pelicula_djf.jpg" },
      { name: "Fones", icon: "/headset_dfj.jpg" },
      { name: "Eletronico", icon: "/eletronico_djf.jpg" },
      { name: "Smarthwatch", icon: "/smartwatch_djf.jpg" },
      { name: "Acessórios", icon: "/cabo_djf.jpg" },
    ].map((category, index) => (
      <Link key={index} href={`/produtos?categoria=${category.name.toLowerCase()}`}>
        <Card className="bg-gray-900 border-gray-800 hover:border-green-500 transition-colors group">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-green p-2 mb-3 flex items-center justify-center overflow-hidden h-14 w-14">
  <div className="relative h-10 w-10 rounded-full overflow-hidden">
    <Image
      src={category.icon || "/placeholder.svg"}
      alt={category.name}
      fill
      className="object-cover"
    />
  </div>
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
