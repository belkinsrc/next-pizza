'use client'

import { useState, useMemo } from 'react'
import { Title } from '@components/shared/ui/title'
import { FilterCheckbox } from '@components/shared/ui'
import { Input, Skeleton } from '@/src/shared/lib'
import { useFilterIngredients } from '../../hooks'

function IngredientsFilter() {
  const visibleItems = 6
  const [search, setSearch] = useState('')
  const [isAllVisible, setIsAllVisible] = useState(false)
  const { ingredients, choosedIngredients, loading, toggle } =
    useFilterIngredients()

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
    <div className="pb-[42px]">
      <Title
        text="Ингредиенты:"
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
                name={name}
                checked={choosedIngredients.has(String(id))}
                onCheckedChange={(id: string) => toggle(id)}
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
}

export { IngredientsFilter }
