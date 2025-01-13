'use client'

import { Title } from '@components/shared/ui/title'
import { Input } from '@components/shared/lib/input'
import { RangeSlider } from '@components/shared/lib/slider'
import { useFilterIngredients } from '../../hooks'

function PriceFilter() {
  const { priceRange, setPriceRange } = useFilterIngredients()

  const handleSetMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 0 : Number(e.target.value)

    if (value > priceRange.max) {
      return setPriceRange({
        min: value,
        max: value,
      })
    }

    return setPriceRange((prev) => ({
      ...prev,
      min: value,
    }))
  }

  const handleSetMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 1000 : Number(e.target.value)

    if (value < priceRange.min) {
      return setPriceRange({
        min: value,
        max: value,
      })
    }

    return setPriceRange((prev) => ({
      ...prev,
      max: value,
    }))
  }

  return (
    <div className="pb-[30px] mb-[30px] border-b-[1px] border-[#F6F6F6]">
      <Title
        text="Цена от и до:"
        size="lg"
        className="mb-[15px] text-[16px] font-bold"
      />
      <div className="flex gap-[15px] mb-4">
        <Input
          type="number"
          value={priceRange.min === 0 ? '' : priceRange.min}
          onChange={handleSetMinValue}
          min={0}
          max={1000}
          placeholder={String(0)}
          className="rounded-[10px] py-[10px] px-[15px]"
        />
        <Input
          type="number"
          value={priceRange.max === 1000 ? '' : priceRange.max}
          onChange={handleSetMaxValue}
          min={0}
          max={1000}
          placeholder={String(1000)}
          className="rounded-[10px] py-[10px] px-[15px]"
        />
      </div>
      <RangeSlider
        value={[priceRange.min, priceRange.max]}
        onValueChange={([min, max]) => setPriceRange({ min, max })}
        min={0}
        max={1000}
        step={10}
      />
    </div>
  )
}

export { PriceFilter }
