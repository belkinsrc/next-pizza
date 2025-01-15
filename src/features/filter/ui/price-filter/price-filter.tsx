'use client'

import { forwardRef, useState, useImperativeHandle } from 'react'
import { Title } from '@components/shared/ui/title'
import { Input } from '@components/shared/lib/input'
import { RangeSlider } from '@components/shared/lib/slider'
import { cn } from '@/src/shared/utils'

export type PriceFilterHandle = {
  getState: () => { from: number; to: number }
}

interface PriceFilterProps {
  min: number
  max: number
  step: number
  title: string
  className?: string
}

const PriceFilter = forwardRef<PriceFilterHandle, PriceFilterProps>(
  ({ className, title, min, max, step }, ref) => {
    const [priceRange, setPriceRange] = useState({
      from: min,
      to: max,
    })

    useImperativeHandle(ref, () => {
      return {
        getState() {
          return priceRange
        },
      }
    }, [priceRange])

    const handleSetMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value === '' ? min : Number(e.target.value)

      if (value > priceRange.to) {
        return setPriceRange({
          from: value,
          to: value,
        })
      }

      return setPriceRange((prev) => ({
        ...prev,
        from: value,
      }))
    }

    const handleSetMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value === '' ? max : Number(e.target.value)

      if (value < priceRange.from) {
        return setPriceRange({
          from: value,
          to: value,
        })
      }

      return setPriceRange((prev) => ({
        ...prev,
        to: value,
      }))
    }

    return (
      <div
        className={cn(className, 'pb-[30px] border-b-[1px] border-[#F6F6F6]')}
      >
        <Title
          text={title}
          size="lg"
          className="mb-[15px] text-[16px] font-bold"
        />
        <div className="flex gap-[15px] mb-4">
          <Input
            type="number"
            value={priceRange.from === min ? '' : priceRange.from}
            onChange={handleSetMinValue}
            min={min}
            max={max}
            placeholder={String(min)}
            className="rounded-[10px] py-[10px] px-[15px]"
          />
          <Input
            type="number"
            value={priceRange.to === max ? '' : priceRange.to}
            onChange={handleSetMaxValue}
            min={min}
            max={max}
            placeholder={String(max)}
            className="rounded-[10px] py-[10px] px-[15px]"
          />
        </div>
        <RangeSlider
          value={[priceRange.from, priceRange.to]}
          onValueChange={([from, to]) => setPriceRange({ from, to })}
          min={min}
          max={max}
          step={step}
        />
      </div>
    )
  }
)

PriceFilter.displayName = 'PriceFilter'

export { PriceFilter }
