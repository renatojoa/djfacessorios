import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="DJF Acessórios" width={120} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-gray-400">
              Sua loja especializada em acessórios eletrônicos de alta qualidade. Capas, películas, fones e muito mais.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-green-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Capas de Celular
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Películas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Fones de Ouvido
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Teclados
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Caixas de Som
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-green-400">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-medium text-white">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-400">Rua Exemplo, 123, Centro, Cidade - Estado</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-400">(00) 12345-6789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-400">contato@djfacessorios.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-green-500/10 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} DJF Acessórios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
