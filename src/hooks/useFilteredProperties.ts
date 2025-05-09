import { useState, useMemo } from 'react'
import { pgProperties } from '@/data/properties'

export function useFilteredProperties() {
  const [searchTerm, setSearchTerm] = useState('')
  const [rentFilter, setRentFilter] = useState<number | null>(null)
  const [locationFilter, setLocationFilter] = useState<string | null>(null)
  const [typeFilter, setTypeFilter] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 4

  const filteredProperties = useMemo(() => {
    return pgProperties.filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            property.location.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRent = rentFilter ? property.rent <= rentFilter : true
      const matchesLocation = locationFilter ? property.location === locationFilter : true
      const matchesType = typeFilter ? property.type === typeFilter : true
      
      return matchesSearch && matchesRent && matchesLocation && matchesType
    })
  }, [searchTerm, rentFilter, locationFilter, typeFilter])

  const currentProperties = useMemo(() => {
    const indexOfLast = currentPage * propertiesPerPage
    const indexOfFirst = indexOfLast - propertiesPerPage
    return filteredProperties.slice(indexOfFirst, indexOfLast)
  }, [filteredProperties, currentPage])

  const uniqueLocations = useMemo(() => {
    return [...new Set(pgProperties.map(p => p.location))]
  }, [])

  const resetPage = () => setCurrentPage(1)

  return {
    searchTerm, setSearchTerm,
    rentFilter, setRentFilter,
    locationFilter, setLocationFilter,
    typeFilter, setTypeFilter,
    currentPage, setCurrentPage,
    filteredProperties,
    currentProperties,
    propertiesPerPage,
    uniqueLocations,
    resetPage
  }
}
