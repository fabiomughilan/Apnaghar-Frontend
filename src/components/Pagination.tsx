"use client"
import { Button } from "@/components/ui/button"

type PaginationProps = {
  total: number
  perPage: number
  currentPage: number
  paginate: (page: number) => void
}

export default function Pagination({ total, perPage, currentPage, paginate }: PaginationProps) {
  const pages = Math.ceil(total / perPage)
  if (pages <= 1) return null

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length: pages }).map((_, index) => (
        <Button
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          onClick={() => paginate(index + 1)} // Calls the paginate function
        >
          {index + 1}
        </Button>
      ))}
    </div>
  )
}
