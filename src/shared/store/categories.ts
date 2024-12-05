import { create } from "zustand"

interface CategoriesState {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

const useActiveCategory = create<CategoriesState>((set) => ({
  activeCategory: 'Все',
  setActiveCategory: (category: string) => set((state) => ({ ...state, activeCategory: category })),
}))

export { useActiveCategory }
