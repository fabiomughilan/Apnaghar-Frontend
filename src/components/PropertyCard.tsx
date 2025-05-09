"use client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Property } from "@/types"

type PropertyCardProps = {
  property: Property
}
export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="p-0">
        <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{property.title}</CardTitle>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-600 mb-2">{property.location}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold">₹{property.rent.toLocaleString()}/mo</span>
          <span className="text-sm text-gray-500">Deposit: ₹{property.deposit.toLocaleString()}</span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {property.amenities.map((amenity: string, index: number) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  )
}
export default PropertyCard
