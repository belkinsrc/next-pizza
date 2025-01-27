import { useCallback, useState } from 'react'
import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation'
import { PRICE_RANGE_FROM, PRICE_RANGE_TO } from '../config'

// export type PriceFilterHandle = {
//   getState: () => { priceFrom: number; priceTo: number }
// }

function initPriceRangeState(searchParams: ReadonlyURLSearchParams | null) {
  const priceFrom = Number(searchParams?.get('priceFrom'))
  const priceTo = Number(searchParams?.get('priceTo'))

  if (!priceTo) {
    return {
      priceFrom,
      priceTo: PRICE_RANGE_TO,
    }
  }
  return {
    priceFrom,
    priceTo,
  }
}

function usePriceFilter() {
  //   ref: ForwardedRef<PriceFilterHandle>
  const searchParams = useSearchParams()
  const [priceRange, setPriceRange] = useState(
    initPriceRangeState(searchParams)
  )

  //   useImperativeHandle(ref, () => {
  //     return {
  //       getState() {
  //         return priceRange
  //       },
  //     }
  //   }, [priceRange])

  const handleSetMinValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.value === '' ? PRICE_RANGE_FROM : Number(e.target.value)

      setPriceRange((prev) => {
        if (value > prev.priceTo) {
          return {
            priceFrom: value,
            priceTo: value,
          }
        }
        return {
          ...prev,
          priceFrom: value,
        }
      })
    },
    []
  )

  const handleSetMaxValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.value === '' ? PRICE_RANGE_TO : Number(e.target.value)
        console.log(priceRange)

      if (value < priceRange.priceFrom) {
        return setPriceRange({
          priceFrom: value,
          priceTo: value,
        })
      }

      return setPriceRange((prev) => ({
        ...prev,
        priceTo: value,
      }))
    },
    [priceRange]
  )

  const handleChangeRangeSlider = useCallback(
    ([priceFrom, priceTo]: number[]) => {
      setPriceRange({ priceFrom, priceTo })
    },
    []
  )

  return {
    priceRange,
    handleSetMinValue,
    handleSetMaxValue,
    handleChangeRangeSlider,
  }
}

export { usePriceFilter }
