import { Product } from '@prisma/client'
import { instance } from './instance'
import { ApiRoutes } from './constants'

function searchProduct(query: string) {
  return instance.get<Product[]>(ApiRoutes.SEARCH_PRODUCT, {
    params: {
      query,
    },
  })
}

export { searchProduct }
