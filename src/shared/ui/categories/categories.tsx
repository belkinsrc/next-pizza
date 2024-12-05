'use client'

import { cn } from '@/src/shared/utils/utils'
// import { useState, useEffect } from 'react'
import { useActiveCategory } from '../../store'

interface Props {
  className?: string
}

const categories = [
  'Все',
  'Мясные',
  'Острые',
  'Сладкие',
  'Вегетарианские',
  'С курицей',
  'Ещё',
]

const Categories: React.FC<Props> = ({ className }) => {
  const activeCategory = useActiveCategory((state) => state.activeCategory)

  return (
    <ul
      className={cn(
        className,
        'bg-[#FAFAFA] rounded-[15px] py-[6px] px-[5px] inline-flex gap-[5px]'
      )}
    >
      {categories.map((ctgry, i) => (
        <li key={i}>
          <a
            href={`/#${ctgry}`}
            className={cn(
              'inline-block font-medium py-[10px] px-[25px] rounded-[15px]',
              ctgry === activeCategory ? 'bg-white text-primary shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] cursor-default pointer-events-none' : ''
            )}
          >
            {ctgry}
          </a>
        </li>
      ))}
    </ul>
  )
}

export { Categories }
