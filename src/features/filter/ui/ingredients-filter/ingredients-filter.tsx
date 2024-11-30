'use client'

import { useState } from 'react'
import { Title } from '@components/shared/ui/title'
import { FilterCheckbox } from '@components/shared/ui'
import { Input } from '@/src/shared/lib/input'

const ingredients = ['Сырный соус', 'Моцарелла', 'Чеснок', 'Солённые огурчики', 'Солённые огурчики', 'Томаты', 'Солённые огурчики', 'Солённые огурчики', 'Томаты']

function IngredientsFilter() {
  const [search, setSearch] = useState('')
  const [filtetedIngredients, setFiltetedIngredients] = useState(ingredients)
  const [isAllVisible, setIsAllVisible] = useState(false)
  const visibleItems = 6
  const itemsCount = ingredients.length

  const handleAllVisibleItemsChange = () => {
    setIsAllVisible((prev) => !prev)
  }

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchedTerm = e.target.value
    setSearch(searchedTerm)

    const filtetedIngredients = ingredients.filter((ingredient) => {
      return ingredient.toLowerCase().includes(searchedTerm.toLowerCase())
    })
    setFiltetedIngredients(filtetedIngredients)
  }

  return (
    <div className="pb-[42px]">
      <Title text="Ингредиенты:" size="lg" className="mb-[15px] text-[16px] font-bold" />
      {isAllVisible && <Input value={search} onChange={handleSearchInputChange} type="text" placeholder='Поиск...' className='mb-4 py-2 px-5' />}
      <div className="flex flex-col gap-4 mb-[21px] h-[224px] overflow-y-auto">
        {filtetedIngredients.slice(0, isAllVisible ? itemsCount : visibleItems).map((ingredient, i) => (
          <FilterCheckbox key={i} text={ingredient} value={ingredient} name="ingredient" />
        ))}
      </div>
      <button className='text-primary' onClick={handleAllVisibleItemsChange}>{isAllVisible ? '- Скрыть' : '+ Показать всё'}</button>
    </div>
  )
}

export { IngredientsFilter }