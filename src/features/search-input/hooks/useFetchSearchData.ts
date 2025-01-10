import { useState } from 'react'
import { useDebounce } from 'react-use'
import { Product } from '@prisma/client'
import { api } from '../api'

function useFetchSearchData(search: string) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Product[]>([])
  const [error, setError] = useState<Error | null>(null)

  useDebounce(
    () => {
      if (!search) {
        setLoading(false)
        setError(new Error('URL and SearchDependency must be valid'))
        setData([])
        return
      }

      const fetchData = async () => {
        setLoading(true)
        setError(null)

        try {
          const res = await api.searchProduct(search)

          if (res.status !== 200) {
            setError(new Error('HTTP error! Status: ' + res.status))
            setLoading(false)
          }
          const data = res.data
          setData(data)
          setLoading(false)
        } catch (err) {
          setError(err instanceof Error ? err : new Error('Unknown error'))
        }
      }
      fetchData()
    },
    250,
    [search]
  )

  return {
    loading,
    error,
    data,
  }
}

export { useFetchSearchData }
