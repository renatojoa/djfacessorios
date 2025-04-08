import Image from "next/image"
import { MapPin, Phone, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stores = [
  {
    id: 1,
    name: "DJF Centro",
    address: "Rua Exemplo, 123, Centro",
    city: "São Paulo - SP",
    phone: "(11) 1234-5678",
    hours: "Seg-Sáb: 9h às 20h | Dom: 10h às 16h",
    image: "/placeholder.svg?height=200&width=300",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 2,
    name: "DJF Shopping",
    address: "Shopping Exemplo, Loja 42, Piso L2",
    city: "São Paulo - SP",
    phone: "(11) 8765-4321",
    hours: "Seg-Sáb: 10h às 22h | Dom: 12h às 20h",
    image: "/placeholder.svg?height=200&width=300",
    mapUrl: "https://maps.google.com",
  },
  {
    id: 3,
    name: "DJF Norte",
    address: "Av. Norte, 789, Bairro Norte",
    city: "São Paulo - SP",
    phone: "(11) 2468-1357",
    hours: "Seg-Sáb: 9h às 19h | Dom: Fechado",
    image: "/placeholder.svg?height=200&width=300",
    mapUrl: "https://maps.google.com",
  },
]

export default function StoreLocations() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stores.map((store) => (
        <Card key={store.id} className="bg-gray-900 border-gray-800 overflow-hidden">
          <div className="relative h-40">
            <Image src={store.image || "/placeholder.svg"} alt={store.name} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-bold text-white mb-2">{store.name}</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <p>{store.address}</p>
                  <p>{store.city}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-500 shrink-0" />
                <span>{store.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-500 shrink-0" />
                <span>{store.hours}</span>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="w-full mt-4 border-green-500 text-green-500 hover:bg-green-500/10"
            >
              <a href={store.mapUrl} target="_blank" rel="noopener noreferrer">
                Ver no Mapa
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
