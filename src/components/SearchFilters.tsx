"use client"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type SearchFiltersProps = {
  searchTerm: string
  setSearchTerm: (term: string) => void
  rentFilter: number | null
  setRentFilter: (val: number | null) => void
  locationFilter: string | null
  setLocationFilter: (val: string | null) => void
  typeFilter: string | null
  setTypeFilter: (val: string | null) => void
  uniqueLocations: string[]
  
}

export default function SearchFilters({
  searchTerm, setSearchTerm,
  rentFilter, setRentFilter,
  locationFilter, setLocationFilter,
  typeFilter, setTypeFilter,
  uniqueLocations,

}: SearchFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name or location..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
             
            }}
          />
        </div>

        {/* Location Filter */}
        <Select
          onValueChange={(value) => {
            setLocationFilter(value === "all" ? null : value)
      
          }}
        value={locationFilter ?? "all"}>
          <SelectTrigger><SelectValue placeholder="Select location" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            {uniqueLocations.map((location: string) => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Type Filter */}
        <Select onValueChange={(value) => {
            setTypeFilter(value === "all" ? null : value)
            
          }} value={typeFilter ?? "all"}>
          
          <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Boys">Boys</SelectItem>
            <SelectItem value="Girls">Girls</SelectItem>
            <SelectItem value="Unisex">Unisex</SelectItem>
          </SelectContent>
        </Select>

        {/* Rent Filter */}
        <Select onValueChange={(value) => {
          setRentFilter(value === "all" ? null : parseInt(value))

          }} value={rentFilter?.toString() ?? "all"}>

          <SelectTrigger><SelectValue placeholder="Max rent" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Rent</SelectItem>
            <SelectItem value="5000">₹5,000</SelectItem>
            <SelectItem value="8000">₹8,000</SelectItem>
            <SelectItem value="10000">₹10,000</SelectItem>
            <SelectItem value="15000">₹15,000</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
