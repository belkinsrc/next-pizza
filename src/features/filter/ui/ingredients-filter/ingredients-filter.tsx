'use client'

import { forwardRef, useState, useMemo, useImperativeHandle } from 'react'
import { Title } from '@components/shared/ui/title'
import { FilterCheckbox } from '@components/shared/ui'
import { Input, Skeleton } from '@/src/shared/lib'
import { useFilterIngredients } from '../../hooks'
import { cn } from '@/src/shared/utils'

export type IngredientsFilterHandle = {
  getState: () => string[]
}

interface IngredientsFilterProps {
  visibleItems: number
  title: string
  className?: string
}

const IngredientsFilter = forwardRef<
  IngredientsFilterHandle,
  IngredientsFilterProps
>(({ visibleItems, title, className }, ref) => {
  const [search, setSearch] = useState('')
  const [isAllVisible, setIsAllVisible] = useState(false)
  const { ingredients, choosedIngredients, loading, toggleChoosedIngredient } =
    useFilterIngredients()

  useImperativeHandle(ref, () => {
    return {
      getState() {
        return Array.from(choosedIngredients)
      },
    }
  }, [choosedIngredients])

  const filteredIngredients = useMemo(() => {
    if (search === '') return ingredients
    return ingredients.filter((ingredient) => {
      return ingredient.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ingredients, search])

  const handleAllVisibleItemsChange = () => {
    setIsAllVisible((prev) => !prev)
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const displayedIngredients = isAllVisible
    ? filteredIngredients
    : ingredients.slice(0, visibleItems)

  return (
    <div className={cn(className)}>
      <Title
        text={title}
        size="lg"
        className="mb-[15px] text-[16px] font-bold"
      />
      {isAllVisible && (
        <Input
          value={search}
          onChange={handleSearchInputChange}
          type="text"
          placeholder="Поиск..."
          className="mb-4 py-2 px-5"
        />
      )}
      <div className="flex flex-col gap-4 mb-[21px] h-[224px] overflow-y-auto">
        {loading
          ? Array.from({ length: visibleItems }, (_, index) => {
              return (
                <Skeleton
                  key={index}
                  className="w-[100%] h-6 rounded-full bg-[#F1F1F1]"
                />
              )
            })
          : displayedIngredients?.map(({ id, name }) => (
              <FilterCheckbox
                id={id}
                key={id}
                text={name}
                value={name}
                checked={choosedIngredients.has(String(id))}
                onCheckedChange={(id: string) => toggleChoosedIngredient(id)}
              />
            ))}
      </div>
      {loading ? (
        <Skeleton className="w-28 h-6 rounded-full bg-[#F1F1F1]" />
      ) : (
        <button className="text-primary" onClick={handleAllVisibleItemsChange}>
          {isAllVisible ? '- Скрыть' : '+ Показать всё'}
        </button>
      )}
    </div>
  )
})

IngredientsFilter.displayName = 'IngredientsFilter'

export { IngredientsFilter }
