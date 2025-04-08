"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const salespeople = [
  { id: "1", name: "Ana Silva" },
  { id: "2", name: "Carlos Oliveira" },
  { id: "3", name: "Juliana Santos" },
  { id: "4", name: "Roberto Almeida" },
]

export default function WhatsAppContact() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [salesperson, setSalesperson] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Format phone number for WhatsApp
    const formattedPhone = phone.replace(/\D/g, "")

    // Create WhatsApp message
    let whatsappMessage = `Olá! Meu nome é ${name} e gostaria de saber mais sobre os produtos da DJF Acessórios.`

    if (message) {
      whatsappMessage += ` ${message}`
    }

    if (salesperson) {
      const selectedSalesperson = salespeople.find((sp) => sp.id === salesperson)
      whatsappMessage += ` (Atendimento com ${selectedSalesperson?.name})`
    }

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/5500000000000?text=${encodedMessage}`, "_blank")
  }

  return (
    <Card className="bg-gray-900 border-gray-800 max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-white">Fale Conosco pelo WhatsApp</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 focus-visible:ring-green-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="salesperson">Vendedor(a) (opcional)</Label>
            <Select value={salesperson} onValueChange={setSalesperson}>
              <SelectTrigger className="bg-gray-800 border-gray-700 focus-visible:ring-green-500">
                <SelectValue placeholder="Selecione um vendedor" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {salespeople.map((person) => (
                  <SelectItem key={person.id} value={person.id}>
                    {person.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              placeholder="Digite sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-800 border-gray-700 focus-visible:ring-green-500 min-h-[100px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-medium">
            Iniciar Conversa no WhatsApp
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
