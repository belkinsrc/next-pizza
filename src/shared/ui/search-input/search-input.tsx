'use client'

import { cn } from '@/src/shared/utils/utils'
import { Input } from '@/src/shared/lib/input'
import { Search } from 'lucide-react'
import { useClickAway } from 'react-use'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useFetchSearchData, useDisableScroll } from './hooks'
import { highlightText } from './utils'

interface SearchInputProps {
  className?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ className }) => {
  const [focused, setFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const target = useRef<HTMLDivElement>(null)
  const products = useFetchSearchData(
    `/api/products/search?query=${inputValue}`,
    inputValue
  )

  useClickAway(target, () => {
    setFocused(false)
  })

  useDisableScroll(focused)

  return (
    <>
      <div
        ref={target}
        className={cn(className, 'relative grow max-w-[764px] z-50')}
      >
        <Search
          className="absolute left-[23px] top-1/2 translate-y-[-50%]"
          size={16}
          color="#ADADAD"
        />
        <Input
          type="text"
          placeholder="Поиск пиццы..."
          className="px-12 py-[14px] h-[50px]"
          onFocus={() => setFocused(true)}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        {focused && inputValue.trim().length > 0 && (
          <ul className="absolute left-0 top-[60px] w-full max-h-80 py-3 bg-white rounded-[15px] overflow-auto">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex items-center gap-3 px-5 h-[50px] hover:bg-[#FFFAF6] cursor-pointer"
              >
                <Image
                  src="https://media.dodostatic.net/image/r:292x292/11ee7d612fc7b7fca5be822752bee1e5.avif"
                  alt="пицца"
                  width={30}
                  height={30}
                />
                <p>{highlightText(product.name, inputValue)}</p>
                <span className="text-[#858585] text-sm">
                  {product.basePrice} ₽
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {focused && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000099] z-40"></div>
      )}
    </>
  )
}

export { SearchInput }