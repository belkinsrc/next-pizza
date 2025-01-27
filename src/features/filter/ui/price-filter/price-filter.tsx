'use client'

import { Title } from '@components/shared/ui/title'
import { Input } from '@components/shared/lib/input'
import { RangeSlider } from '@components/shared/lib/slider'
import { cn } from '@/src/shared/utils'
import { usePriceFilter } from '../../model'
import {
  PRICE_RANGE_FROM,
  PRICE_RANGE_TO,
  PRICE_RANGE_STEP,
} from '../../config'

interface PriceFilterProps {
  title: string
  className?: string
}

const PriceFilter = ({ className, title }: PriceFilterProps) => {
  const {
    priceRange,
    handleSetMinValue,
    handleSetMaxValue,
    handleChangeRangeSlider,
  } = usePriceFilter()

  return (
    <div className={cn(className, 'pb-[30px] border-b-[1px] border-[#F6F6F6]')}>
      <Title
        text={title}
        size="lg"
        className="mb-[15px] text-[16px] font-bold"
      />
      <div className="flex gap-[15px] mb-4">
        <Input
          type="number"
          value={
            priceRange.priceFrom === PRICE_RANGE_FROM
              ? ''
              : priceRange.priceFrom
          }
          onChange={handleSetMinValue}
          min={PRICE_RANGE_FROM}
          max={PRICE_RANGE_TO}
          placeholder={String(PRICE_RANGE_FROM)}
          className="rounded-[10px] py-[10px] px-[15px]"
        />
        <Input
          type="number"
          value={
            priceRange.priceTo === PRICE_RANGE_TO ? '' : priceRange.priceTo
          }
          onChange={handleSetMaxValue}
          min={PRICE_RANGE_FROM}
          max={PRICE_RANGE_TO}
          placeholder={String(PRICE_RANGE_TO)}
          className="rounded-[10px] py-[10px] px-[15px]"
        />
      </div>
      <RangeSlider
        value={[priceRange.priceFrom, priceRange.priceTo]}
        onValueChange={handleChangeRangeSlider}
        min={PRICE_RANGE_FROM}
        max={PRICE_RANGE_TO}
        step={PRICE_RANGE_STEP}
      />
    </div>
  )
}

PriceFilter.displayName = 'PriceFilter'

export { PriceFilter }
