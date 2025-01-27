'use client'

import { useRef } from 'react'
import { cn } from '@components/shared/utils'
import { Title } from '@components/shared/ui'
import { PriceFilter } from './price-filter'
import {
  IngredientsFilter,
  IngredientsFilterHandle,
} from './ingredients-filter'
import { AdditionalFilter, AdditionalFilterHandle } from './addtitional-filter'
import { Button } from '@/src/shared/lib'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { usePriceFilter } from '../model'

interface FilterProps {
  className?: string
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  const ingredientsFilter = useRef<IngredientsFilterHandle>(null)
  // const priceFilter = useRef<PriceFilterHandle>(null)
  const { priceRange } = usePriceFilter()
  const additionalFilter = useRef<AdditionalFilterHandle>(null)
  const currentPathname = usePathname()
  const currentSearchParams = useSearchParams()
  const router = useRouter()
  console.log(priceRange)

  const createQueryString = () => {
    const filterSettings = {
      // ...priceFilter.current?.getState(),
      ...priceRange,
      ingredients: ingredientsFilter.current?.getState(),
      additionalOptions: additionalFilter.current?.getState(),
    }

    const params = new URLSearchParams(currentSearchParams?.toString())

    // Adding "filterSettings's" search params to current URL
    for (const [key, value] of Object.entries(filterSettings)) {
      if (Array.isArray(value)) {
        if (value.length === 0) continue
        params.set(key, value.join(','))
      } else {
        params.set(key, String(value))
      }
    }
    return params.toString()
  }

  const handleApplyFilter = () => {
    const queryString = createQueryString()
    router.push(`${currentPathname}?${queryString}`)
  }

  return (
    <aside className={cn(className, 'basis-[244px] flex-grow-0 flex-shrink-0')}>
      <Title
        text="Фильтрация"
        size="xl"
        className="mb-[25px] text-[22px] font-bold"
      />
      <AdditionalFilter ref={additionalFilter} className="mb-[25px]" />
      <PriceFilter
        // ref={priceFilter}
        // min={0}
        // max={1000}
        // step={10}
        title="Цена от и до:"
        className="mb-[30px]"
      />
      <IngredientsFilter
        ref={ingredientsFilter}
        visibleItems={6}
        title="Ингредиенты:"
        className="mb-[42px]"
      />
      <Button
        onClick={handleApplyFilter}
        className="text-[16px] py-[15px] h-[50px] w-full rounded-[18px]"
      >
        Применить
      </Button>
    </aside>
  )
}

export { Filter }
