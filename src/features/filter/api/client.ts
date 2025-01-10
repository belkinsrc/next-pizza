import { Ingredient } from '@prisma/client'
import { instance } from './instance'
import { ApiRoutes } from './constants'

async function getAllIngredients() {
  return (await instance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}

async function getLimitedIngredients(limit: number) {
  return (
    await instance.get<Ingredient[]>(ApiRoutes.INGREDIENTS, {
      params: {
        limit,
      },
    })
  ).data
}

export { getAllIngredients, getLimitedIngredients }
