export interface Product {
  id: number

  name: string
  imageUrl: string
  basePrice: number
  carbs: number
  fats: number
  proteins: number
  kcal: number
  weight: number

  createdAt: Date
  updatedAt: Date

  // pizzas: Pizza[]

  // cartItems: CartItem[]

  // addOns: AddOn[]

  // categories: Category[]
  // categoryId: number

  // variations: Variation[]
}
