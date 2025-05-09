"use client"
import { useState } from "react"
import { pgProperties } from "@/data/properties"
import PropertyCard from "@/components/PropertyCard"
import SearchFilters from "@/components/SearchFilters"
import Pagination from "@/components/Pagination"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PGListingPortal() {
  const [searchTerm, setSearchTerm] = useState("")
  const [rentFilter, setRentFilter] = useState<number | null>(null)
  const [locationFilter, setLocationFilter] = useState<string | null>(null)
  const [typeFilter, setTypeFilter] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 4


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const filteredProperties = pgProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRent = rentFilter ? property.rent <= rentFilter : true
    const matchesLocation = locationFilter ? property.location === locationFilter : true
    const matchesType = typeFilter ? property.type === typeFilter : true
    return matchesSearch && matchesRent && matchesLocation && matchesType
  })

  const indexOfLast = currentPage * propertiesPerPage
  const currentProperties = filteredProperties.slice(indexOfLast - propertiesPerPage, indexOfLast)
  const uniqueLocations = [...new Set(pgProperties.map(p => p.location))]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <SearchFilters
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          rentFilter={rentFilter} setRentFilter={setRentFilter}
          locationFilter={locationFilter} setLocationFilter={setLocationFilter}
          typeFilter={typeFilter} setTypeFilter={setTypeFilter}
          uniqueLocations={uniqueLocations}
         
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentProperties.length > 0 ? (
            currentProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No properties found matching your criteria</p>
            </div>
          )}
        </div>
        <Pagination
          total={filteredProperties.length}
          perPage={propertiesPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
      <Footer />
    </div>
  )
}
