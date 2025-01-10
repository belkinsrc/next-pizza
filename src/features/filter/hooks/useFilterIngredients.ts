import { Ingredient } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useSet } from 'react-use'
import { api } from '../api'

function useFilterIngredients() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [choosedIngredients, { add, remove, toggle }] = useSet(
    new Set<string>([])
  )

  useEffect(() => {
    const fetchIngredients = async () => {
      setLoading(true)
      setError(null)

      try {
        const ingredients = await api.getAllIngredients()
        setIngredients(ingredients)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      }
    }
    fetchIngredients()
  }, [])

  return {
    loading,
    error,
    ingredients,
    choosedIngredients,
    add,
    remove,
    toggle,
  }
}

export { useFilterIngredients }
