"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Save, Plus, Trash2, Edit, LogOut } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  // Simulação de produto em destaque
  const [featuredProduct, setFeaturedProduct] = useState({
    id: "special1",
    name: "Fone de Ouvido Bluetooth com Cancelamento de Ruído",
    description:
      "Experimente o som de alta qualidade com nosso fone de ouvido premium com cancelamento de ruído ativo.",
    price: 299.9,
    originalPrice: 499.9,
    endDate: "2025-05-15",
    stockPercentage: 65,
    image: "/placeholder.svg?height=100&width=100",
  })

  // Simulação de produtos
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Capa Premium para iPhone 15 Pro",
      price: 89.9,
      originalPrice: 129.9,
      category: "Capas",
      isFeatured: false,
    },
    {
      id: "2",
      name: "Película de Vidro 3D para Samsung Galaxy S23",
      price: 49.9,
      originalPrice: 69.9,
      category: "Películas",
      isFeatured: false,
    },
    {
      id: "3",
      name: "Fone de Ouvido Bluetooth TWS",
      price: 199.9,
      originalPrice: null,
      category: "Fones",
      isFeatured: false,
    },
    {
      id: "special1",
      name: "Fone de Ouvido Bluetooth com Cancelamento de Ruído",
      price: 299.9,
      originalPrice: 499.9,
      category: "Fones",
      isFeatured: true,
    },
  ])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogout = () => {
    router.push("/admin")
  }

  const handleSaveFeaturedProduct = () => {
    // Simulação de salvamento
    alert("Produto em destaque atualizado com sucesso!")
  }

  if (!isClient) {
    return null
  }

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-green-500/20 bg-black">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white" onClick={() => router.push("/")}>
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Voltar para o site</span>
            </Button>
            <h1 className="text-lg font-bold text-white">Painel Administrativo - DJF Acessórios</h1>
          </div>
          <Button variant="ghost" size="sm" className="text-white" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>
      </header>

      <main className="container px-4 py-6">
        <Tabs defaultValue="featured" className="space-y-6">
          <TabsList className="bg-gray-900">
            <TabsTrigger value="featured" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Produto em Destaque
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Gerenciar Produtos
            </TabsTrigger>
            <TabsTrigger value="stores" className="data-[state=active]:bg-green-500 data-[state=active]:text-black">
              Lojas
            </TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Produto em Destaque da Semana</CardTitle>
                <CardDescription>Configure o produto que será exibido em destaque na página inicial.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square relative rounded-md overflow-hidden border border-gray-800">
                      <Image
                        src={featuredProduct.image || "/placeholder.svg"}
                        alt="Imagem do produto"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="product-image">Imagem do Produto</Label>
                      <Input
                        id="product-image"
                        type="file"
                        className="bg-gray-800 border-gray-700 focus-visible:ring-green-500 mt-2"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-select">Selecionar Produto</Label>
                      <Select defaultValue={featuredProduct.id}>
                        <SelectTrigger className="bg-gray-800 border-gray-700 focus-visible:ring-green-500">
                          <SelectValue placeholder="Selecione um produto" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {products.map((product) => (
                            <SelectItem key={product.id} value={product.id}>
                              {product.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-name">Nome do Produto</Label>
                      <Input
                        id="product-name"
                        value={featuredProduct.name}
                        onChange={(e) => setFeaturedProduct({ ...featuredProduct, name: e.target.value })}
                        className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product-description">Descrição</Label>
                      <Textarea
                        id="product-description"
                        value={featuredProduct.description}
                        onChange={(e) => setFeaturedProduct({ ...featuredProduct, description: e.target.value })}
                        className="bg-gray-800 border-gray-700 focus-visible:ring-green-500 min-h-[100px]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product-price">Preço Atual (R$)</Label>
                        <Input
                          id="product-price"
                          type="number"
                          step="0.01"
                          value={featuredProduct.price}
                          onChange={(e) =>
                            setFeaturedProduct({ ...featuredProduct, price: Number.parseFloat(e.target.value) })
                          }
                          className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-original-price">Preço Original (R$)</Label>
                        <Input
                          id="product-original-price"
                          type="number"
                          step="0.01"
                          value={featuredProduct.originalPrice}
                          onChange={(e) =>
                            setFeaturedProduct({ ...featuredProduct, originalPrice: Number.parseFloat(e.target.value) })
                          }
                          className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="product-end-date">Data de Término da Promoção</Label>
                        <Input
                          id="product-end-date"
                          type="date"
                          value={featuredProduct.endDate}
                          onChange={(e) => setFeaturedProduct({ ...featuredProduct, endDate: e.target.value })}
                          className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="product-stock">Porcentagem em Estoque</Label>
                        <Input
                          id="product-stock"
                          type="number"
                          min="0"
                          max="100"
                          value={featuredProduct.stockPercentage}
                          onChange={(e) =>
                            setFeaturedProduct({ ...featuredProduct, stockPercentage: Number.parseInt(e.target.value) })
                          }
                          className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  onClick={handleSaveFeaturedProduct}
                  className="bg-green-500 hover:bg-green-600 text-black font-medium"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Salvar Alterações
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Gerenciar Produtos</CardTitle>
                  <CardDescription>Adicione, edite ou remova produtos do catálogo.</CardDescription>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">
                  <Plus className="h-4 w-4 mr-2" />
                  Novo Produto
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800">
                      <TableHead className="text-white">Nome</TableHead>
                      <TableHead className="text-white">Categoria</TableHead>
                      <TableHead className="text-white text-right">Preço (R$)</TableHead>
                      <TableHead className="text-white text-center">Em Destaque</TableHead>
                      <TableHead className="text-white text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id} className="border-gray-800">
                        <TableCell className="font-medium text-white">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell className="text-right">
                          {product.price.toFixed(2)}
                          {product.originalPrice && (
                            <span className="text-gray-400 text-xs ml-2 line-through">
                              {product.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </TableCell>
                        <TableCell className="text-center">
                          <Switch checked={product.isFeatured} />
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Editar</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="text-white hover:text-red-400">
                              <Trash2 className="h-4 w-4" />
                              <span className="sr-only">Excluir</span>
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stores" className="space-y-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Gerenciar Lojas</CardTitle>
                  <CardDescription>Adicione, edite ou remova informações das lojas físicas.</CardDescription>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 text-black font-medium">
                  <Plus className="h-4 w-4 mr-2" />
                  Nova Loja
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-800">
                      <TableHead className="text-white">Nome</TableHead>
                      <TableHead className="text-white">Endereço</TableHead>
                      <TableHead className="text-white">Telefone</TableHead>
                      <TableHead className="text-white text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-gray-800">
                      <TableCell className="font-medium text-white">DJF Centro</TableCell>
                      <TableCell>Rua Exemplo, 123, Centro, São Paulo - SP</TableCell>
                      <TableCell>(11) 1234-5678</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-white hover:text-red-400">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Excluir</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800">
                      <TableCell className="font-medium text-white">DJF Shopping</TableCell>
                      <TableCell>Shopping Exemplo, Loja 42, Piso L2, São Paulo - SP</TableCell>
                      <TableCell>(11) 8765-4321</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-white hover:text-red-400">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Excluir</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-gray-800">
                      <TableCell className="font-medium text-white">DJF Norte</TableCell>
                      <TableCell>Av. Norte, 789, Bairro Norte, São Paulo - SP</TableCell>
                      <TableCell>(11) 2468-1357</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
                            <Edit className="h-4 w-4" />
                            <span className="sr-only">Editar</span>
                          </Button>
                          <Button variant="ghost" size="icon" className="text-white hover:text-red-400">
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Excluir</span>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
