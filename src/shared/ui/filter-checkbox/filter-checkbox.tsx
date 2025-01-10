'use client'

import { Checkbox } from '../../lib/checkbox'

export interface FilterChecboxProps {
  id: number
  text: string
  value: string
  endAdornment?: React.ReactNode
  name?: string
  checked?: boolean
  onCheckedChange?: (id: string) => void
}

const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  id,
  text,
  value,
  endAdornment,
  name,
  checked,
  onCheckedChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
        checked={checked}
        onCheckedChange={() => onCheckedChange?.(String(id))}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  )
}

export { FilterCheckbox }
