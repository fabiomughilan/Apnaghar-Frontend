"use client"
import { User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary">ApnaGhar</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline"  onClick={() => alert("Login functionality not implemented")}>
            <User className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
