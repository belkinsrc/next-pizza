'use client'

import { FilterCheckbox } from '@components/shared/ui'
import { useFilterIngredients } from '../../hooks'
import { cn } from '@/src/shared/utils'

interface AdditionalFilterProps {
  className?: string
}

function AdditionalFilter({ className }: AdditionalFilterProps) {
  const { additionalOptions, choosedAddtional, toggleChoosedAdditional } =
    useFilterIngredients()

  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-4 pb-[25px] mb-[25px] border-b-[1px] border-[#F6F6F6]'
      )}
    >
      {additionalOptions?.map(({ id, name }) => {
        return (
          <FilterCheckbox
            id={id}
            key={id}
            text={name}
            value={name}
            checked={choosedAddtional.has(id)}
            onCheckedChange={() => toggleChoosedAdditional(id)}
          />
        )
      })}
    </div>
  )
}

export { AdditionalFilter }
