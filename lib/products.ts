// Simulação de uma API de produtos
// Em um ambiente real, isso seria substituído por chamadas a uma API real

interface Product {
  id: string
  name: string
  description?: string
  price: number
  originalPrice?: number
  image: string
  category: string
  isNew?: boolean
  isSale?: boolean
}

interface FeaturedProduct extends Product {
  endDate: string
  stockPercentage: number
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Capa Premium para iPhone 15 Pro",
    description: "Capa de alta qualidade com proteção contra impactos e design elegante.",
    price: 89.9,
    originalPrice: 129.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Capas",
    isSale: true,
  },
  {
    id: "2",
    name: "Película de Vidro 3D para Samsung Galaxy S23",
    price: 49.9,
    originalPrice: 69.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Películas",
    isSale: true,
  },
  {
    id: "3",
    name: "Fone de Ouvido Bluetooth TWS",
    price: 199.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Fones",
    isNew: true,
  },
  {
    id: "4",
    name: "Teclado Mecânico Gamer RGB",
    price: 299.9,
    originalPrice: 349.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Teclados",
    isSale: true,
  },
  {
    id: "5",
    name: "Caixa de Som Bluetooth à Prova D'água",
    price: 159.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Caixas de Som",
    isNew: true,
  },
  {
    id: "6",
    name: "Carregador Rápido USB-C 25W",
    price: 79.9,
    originalPrice: 99.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
    isSale: true,
  },
  {
    id: "7",
    name: "Suporte Veicular para Smartphone",
    price: 59.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
  },
  {
    id: "8",
    name: "Cabo USB-C Trançado 2m",
    price: 39.9,
    image: "/placeholder.svg?height=400&width=400",
    category: "Acessórios",
    isNew: true,
  },
]

const mockFeaturedProduct: FeaturedProduct = {
  id: "special1",
  name: "Fone de Ouvido Bluetooth com Cancelamento de Ruído",
  description:
    "Experimente o som de alta qualidade com nosso fone de ouvido premium com cancelamento de ruído ativo. Ideal para trabalho, estudo ou lazer, oferecendo até 30 horas de bateria e conforto excepcional.",
  price: 299.9,
  originalPrice: 499.9,
  image: "/placeholder.svg?height=600&width=600",
  category: "Fones",
  endDate: "15/05/2025",
  stockPercentage: 65,
  isSale: true,
}

export async function getProducts({
  category = "",
  limit = 0,
}: {
  category?: string
  limit?: number
}): Promise<Product[]> {
  // Simula um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 300))

  let filteredProducts = [...mockProducts]

  if (category === "best-sellers") {
    // Simula produtos mais vendidos
    filteredProducts = mockProducts.filter((_, index) => index % 2 === 0)
  } else if (category === "new-arrivals") {
    // Simula produtos novos
    filteredProducts = mockProducts.filter((p) => p.isNew)
  } else if (category) {
    // Filtra por categoria específica
    filteredProducts = mockProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
  }

  // Aplica o limite se especificado
  if (limit > 0 && filteredProducts.length > limit) {
    filteredProducts = filteredProducts.slice(0, limit)
  }

  return filteredProducts
}

export async function getProductById(id: string): Promise<Product | null> {
  // Simula um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 300))

  const product = mockProducts.find((p) => p.id === id)
  return product || null
}

export async function getFeaturedProduct(): Promise<FeaturedProduct> {
  // Simula um atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 300))

  return mockFeaturedProduct
}
