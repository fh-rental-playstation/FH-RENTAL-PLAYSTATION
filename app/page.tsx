"use client"

import { useState } from "react"
import { Calendar, Clock, GamepadIcon, Star, Users, Zap } from "lucide-react"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const consoles = [
  {
    id: 1,
    name: "PlayStation 5",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 150,000",
    period: "per hari",
    features: ["4K Gaming", "Ray Tracing", "SSD Ultra Cepat", "DualSense Controller"],
    available: true,
    rating: 4.9,
  },
  {
    id: 2,
    name: "PlayStation 4 Pro",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 100,000",
    period: "per hari",
    features: ["4K Gaming", "HDR Support", "1TB Storage", "DualShock 4"],
    available: true,
    rating: 4.7,
  },
  {
    id: 3,
    name: "PlayStation 4 Slim",
    image: "/placeholder.svg?height=300&width=400",
    price: "Rp 75,000",
    period: "per hari",
    features: ["Full HD Gaming", "500GB Storage", "Compact Design", "DualShock 4"],
    available: false,
    rating: 4.5,
  },
]

const games = [
  {
    id: 1,
    title: "Spider-Man 2",
    image: "/placeholder.svg?height=200&width=150",
    price: "Rp 25,000",
    period: "per hari",
    genre: "Action",
    rating: 4.8,
    console: "PS5",
  },
  {
    id: 2,
    title: "God of War Ragnarök",
    image: "/placeholder.svg?height=200&width=150",
    price: "Rp 25,000",
    period: "per hari",
    genre: "Action",
    rating: 4.9,
    console: "PS5",
  },
  {
    id: 3,
    title: "FIFA 24",
    image: "/placeholder.svg?height=200&width=150",
    price: "Rp 20,000",
    period: "per hari",
    genre: "Sports",
    rating: 4.6,
    console: "PS5",
  },
  {
    id: 4,
    title: "The Last of Us Part II",
    image: "/placeholder.svg?height=200&width=150",
    price: "Rp 20,000",
    period: "per hari",
    genre: "Action",
    rating: 4.7,
    console: "PS4",
  },
  {
    id: 5,
    title: "Ghost of Tsushima",
    image: "/placeholder.svg?height=200&width=150",
    price: "Rp 20,000",
    period: "per hari",
    genre: "Action",
    rating: 4.8,
    console: "PS4",
  },
  {
    id: 6,
    title: "Gran Turismo 7",
    image: "/placeholder.svg?height=200&width=150",
    price: "Rp 25,000",
    period: "per hari",
    genre: "Racing",
    rating: 4.5,
    console: "PS5",
  },
]

export default function PlayStationRentalPage() {
  const [selectedConsole, setSelectedConsole] = useState("")
  const [rentalDays, setRentalDays] = useState("1")
  const [selectedGames, setSelectedGames] = useState<number[]>([])

  const toggleGameSelection = (gameId: number) => {
    setSelectedGames((prev) => (prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]))
  }

  const calculateTotal = () => {
    const console = consoles.find((c) => c.id.toString() === selectedConsole)
    const consolePrice = console ? Number.parseInt(console.price.replace(/[^\d]/g, "")) : 0
    const gamesPrice = selectedGames.reduce((total, gameId) => {
      const game = games.find((g) => g.id === gameId)
      return total + (game ? Number.parseInt(game.price.replace(/[^\d]/g, "")) : 0)
    }, 0)
    return (consolePrice + gamesPrice) * Number.parseInt(rentalDays)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GamepadIcon className="h-8 w-8 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">FH PlayStation Rental</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#konsol" className="text-white/80 hover:text-white transition-colors">
                Konsol
              </a>
              <a href="#games" className="text-white/80 hover:text-white transition-colors">
                Games
              </a>
              <a href="#rental" className="text-white/80 hover:text-white transition-colors">
                Rental
              </a>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Kontak
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sewa PlayStation Terbaik
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto">
            Nikmati pengalaman gaming terdepan dengan PlayStation 5 dan koleksi game terlengkap. Rental harian dengan
            harga terjangkau!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Booking Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
              Lihat Katalog
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Setup Cepat</h3>
              <p className="text-white/70">Konsol siap pakai, tinggal colok dan main!</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rental Fleksibel</h3>
              <p className="text-white/70">Sewa harian, mingguan, atau bulanan sesuai kebutuhan</p>
            </div>
            <div className="text-center text-white">
              <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
              <p className="text-white/70">Tim support siap membantu kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Console Catalog */}
      <section id="konsol" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Pilihan Konsol PlayStation</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {consoles.map((console) => (
              <Card key={console.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardHeader>
                  <Image
                    src={console.image || "/placeholder.svg"}
                    alt={console.name}
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{console.name}</CardTitle>
                    {console.available ? (
                      <Badge className="bg-green-600">Tersedia</Badge>
                    ) : (
                      <Badge variant="secondary">Tidak Tersedia</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{console.rating}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {console.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-white/80">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-blue-400">
                    {console.price} <span className="text-sm text-white/60">{console.period}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" disabled={!console.available}>
                    {console.available ? "Pilih Konsol" : "Tidak Tersedia"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Games Catalog */}
      <section id="games" className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Koleksi Game Terlengkap</h2>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4 bg-white/10 border-white/20">
              <TabsTrigger value="all" className="text-white data-[state=active]:bg-blue-600">
                Semua
              </TabsTrigger>
              <TabsTrigger value="ps5" className="text-white data-[state=active]:bg-blue-600">
                PS5
              </TabsTrigger>
              <TabsTrigger value="ps4" className="text-white data-[state=active]:bg-blue-600">
                PS4
              </TabsTrigger>
              <TabsTrigger value="popular" className="text-white data-[state=active]:bg-blue-600">
                Popular
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {games.map((game) => (
                  <Card
                    key={game.id}
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white cursor-pointer hover:bg-white/20 transition-colors"
                  >
                    <CardHeader className="p-3">
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.title}
                        width={150}
                        height={200}
                        className="rounded-lg mb-2"
                      />
                      <CardTitle className="text-sm line-clamp-2">{game.title}</CardTitle>
                      <div className="flex items-center justify-between text-xs">
                        <Badge variant="outline" className="border-white/20 text-white">
                          {game.console}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{game.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter className="p-3 pt-0">
                      <div className="w-full">
                        <div className="text-lg font-bold text-blue-400 mb-2">
                          {game.price} <span className="text-xs text-white/60">{game.period}</span>
                        </div>
                        <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                          Tambah
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Rental Form */}
      <section id="rental" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Form Rental PlayStation</CardTitle>
                <CardDescription className="text-center text-white/70">
                  Isi form di bawah untuk melakukan booking rental
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                    <Input
                      placeholder="Masukkan nama lengkap"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">No. WhatsApp</label>
                    <Input
                      placeholder="08xxxxxxxxxx"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pilih Konsol</label>
                  <Select value={selectedConsole} onValueChange={setSelectedConsole}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Pilih konsol PlayStation" />
                    </SelectTrigger>
                    <SelectContent>
                      {consoles
                        .filter((c) => c.available)
                        .map((console) => (
                          <SelectItem key={console.id} value={console.id.toString()}>
                            {console.name} - {console.price}/hari
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Durasi Rental</label>
                    <Select value={rentalDays} onValueChange={setRentalDays}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Hari</SelectItem>
                        <SelectItem value="2">2 Hari</SelectItem>
                        <SelectItem value="3">3 Hari</SelectItem>
                        <SelectItem value="7">1 Minggu</SelectItem>
                        <SelectItem value="14">2 Minggu</SelectItem>
                        <SelectItem value="30">1 Bulan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tanggal Mulai</label>
                    <Input type="date" className="bg-white/10 border-white/20 text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Alamat Lengkap</label>
                  <Input
                    placeholder="Alamat untuk pengiriman konsol"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                {selectedConsole && (
                  <div className="bg-blue-600/20 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Ringkasan Rental:</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Konsol ({rentalDays} hari)</span>
                        <span>
                          Rp{" "}
                          {(
                            Number.parseInt(
                              consoles.find((c) => c.id.toString() === selectedConsole)?.price.replace(/[^\d]/g, "") ||
                                "0",
                            ) * Number.parseInt(rentalDays)
                          ).toLocaleString("id-ID")}
                        </span>
                      </div>
                      {selectedGames.length > 0 && (
                        <div className="flex justify-between">
                          <span>
                            Games ({selectedGames.length} item, {rentalDays} hari)
                          </span>
                          <span>
                            Rp{" "}
                            {(
                              selectedGames.reduce((total, gameId) => {
                                const game = games.find((g) => g.id === gameId)
                                return total + (game ? Number.parseInt(game.price.replace(/[^\d]/g, "")) : 0)
                              }, 0) * Number.parseInt(rentalDays)
                            ).toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}
                      <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                        <span>Total</span>
                        <span>Rp {calculateTotal().toLocaleString("id-ID")}</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Booking Sekarang
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GamepadIcon className="h-6 w-6 text-blue-400" />
                <h3 className="text-lg font-bold">FH PlayStation Rental</h3>
              </div>
              <p className="text-white/70 text-sm">
                Penyedia layanan rental PlayStation terpercaya dengan koleksi game terlengkap dan harga terjangkau.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Rental PlayStation 5</li>
                <li>Rental PlayStation 4</li>
                <li>Rental Game</li>
                <li>Setup & Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Email: info@fhpsrental.com</li>
                <li>Alamat: Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Senin - Jumat: 09:00 - 21:00</li>
                <li>Sabtu - Minggu: 10:00 - 22:00</li>
                <li>Delivery 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; 2024 FH PlayStation Rental. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
