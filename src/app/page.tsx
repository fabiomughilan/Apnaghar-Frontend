"use client"
import Header from "@/components/Header"
import PropertyCard from "@/components/PropertyCard"
import Pagination from "@/components/Pagination"
import Footer from "@/components/Footer"
import SearchFilters from "@/components/SearchFilters"
import { useFilteredProperties } from "@/hooks/useFilteredProperties"

export default function PGListingPortal() {
  const {
    searchTerm, setSearchTerm,
    rentFilter, setRentFilter,
    locationFilter, setLocationFilter,
    typeFilter, setTypeFilter,
    currentPage, setCurrentPage,
    filteredProperties,
    currentProperties,
    propertiesPerPage,
    uniqueLocations, 
  } = useFilteredProperties()

  // Handle page reset when filters or search term change
  const handleFilterChange = () => {
    setCurrentPage(1); // Reset to first page when filters change
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search and Filters */}
      <div className="container mx-auto p-4">
        <SearchFilters 
          searchTerm={searchTerm} 
          setSearchTerm={(term: string) => { setSearchTerm(term); handleFilterChange(); }}
          rentFilter={rentFilter} 
          setRentFilter={(value:number | null) => { setRentFilter(value); handleFilterChange(); }}
          locationFilter={locationFilter} 
          setLocationFilter={(value: string | null) => { setLocationFilter(value); handleFilterChange(); }}
          typeFilter={typeFilter} 
          setTypeFilter={(value: string | null) => { setTypeFilter(value); handleFilterChange(); }}
          uniqueLocations={uniqueLocations}
          
        />

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        {filteredProperties.length > propertiesPerPage && (
          <Pagination
            total={filteredProperties.length}
            perPage={propertiesPerPage}
            currentPage={currentPage}
            paginate={setCurrentPage} // Handle page change
          />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
