import { cn } from '@/src/shared/utils/utils'
import React from 'react'

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

interface Props {
  text: string
  size: TitleSize
  className?: string
}

const Title: React.FC<Props> = ({ text, size, className }) => {
  const mapTagBySize = {
    xs: 'h6',
    sm: 'h5',
    md: 'h4',
    lg: 'h3',
    xl: 'h2',
    '2xl': 'h1',
  }

  const mapClassNameBySize = {
    xs: 'text-[16px]',
    sm: 'text-[18px]',
    md: 'text-[20px]',
    lg: 'text-[24px] font-bold',
    xl: 'text-[34px] font-extrabold',
    '2xl': 'text-[36px] font-extrabold',
  }

  return React.createElement(
    mapTagBySize[size],
    {
      className: cn(mapClassNameBySize[size], className),
    },
    text
  )
}

export { Title }
