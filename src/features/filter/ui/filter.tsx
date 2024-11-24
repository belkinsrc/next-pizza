import { FilterCheckbox } from "@components/shared/ui"
import { cn } from "@components/shared/utils/utils"

interface FilterProps {
  className?: string
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  return (
    <aside className={cn(className)}>
      <h3>Фильтрация</h3>
      <FilterCheckbox text="Популярные" value="popular" name="popular"/>
    </aside>
  )
}

export { Filter }


