import { useEffect, useState } from 'react'
import { Product } from '@prisma/client'

function useFetchSearchData(url: string, searchDependency: string) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(url)
      const products: Product[] = await data.json()
      setProducts(products)
    }
    fetchData()
  }, [url, searchDependency])

  return products
}

export { useFetchSearchData }
