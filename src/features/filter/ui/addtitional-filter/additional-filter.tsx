'use client'

import { forwardRef, useImperativeHandle, useMemo } from 'react'
import { useSet } from 'react-use'
import { FilterCheckbox } from '@components/shared/ui'
import { cn } from '@/src/shared/utils'

export type AdditionalFilterHandle = {
  getState: () => Set<string>
}

interface AdditionalFilterProps {
  className?: string
}

const AdditionalFilter = forwardRef<
  AdditionalFilterHandle,
  AdditionalFilterProps
>(({ className }, ref) => {
  const [choosedAddtional, { toggle }] = useSet(new Set<string>([]))

  const additionalOptions = useMemo(() => {
    return [
      { id: 'configurable', name: 'Можно собирать' },
      { id: 'latest', name: 'Новинки' },
    ]
  }, [])

  useImperativeHandle(ref, () => {
    return {
      getState() {
        return choosedAddtional
      },
    }
  }, [choosedAddtional])

  return (
    <div
      className={cn(
        className,
        'flex flex-col gap-4 pb-[25px] border-b-[1px] border-[#F6F6F6]'
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
            onCheckedChange={() => toggle(id)}
          />
        )
      })}
    </div>
  )
})

AdditionalFilter.displayName = 'AdditionalFilter'

export { AdditionalFilter }
