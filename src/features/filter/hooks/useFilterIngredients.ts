import { Ingredient } from '@prisma/client'
import { useEffect, useState, useMemo } from 'react'
import { useSet } from 'react-use'
import { api } from '../api'

function useFilterIngredients() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 1000,
  })
  const [ingredients, setIngredients] = useState<Ingredient[]>([])
  const [choosedIngredients, { toggle: toggleChoosedIngredient }] = useSet(
    new Set<string>([])
  )
  const [choosedAddtional, { toggle: toggleChoosedAdditional }] = useSet(
    new Set<string>([])
  )
  const additionalOptions = useMemo(() => {
    return [
      { id: 'configurable', name: 'Можно собирать' },
      { id: 'latest', name: 'Новинки' },
    ]
  }, [])

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
    additionalOptions,
    choosedIngredients,
    choosedAddtional,
    toggleChoosedIngredient,
    toggleChoosedAdditional,
    priceRange,
    setPriceRange,
  }
}

export { useFilterIngredients }
