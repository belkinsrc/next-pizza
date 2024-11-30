import { cn } from "@components/shared/utils"
import { FilterCheckbox, Title } from "@components/shared/ui"
import { PriceFilter } from "./price-filter"
import { IngredientsFilter } from "./ingredients-filter"
import { DoughTypeFilter } from "./dough-type-filter"

interface FilterProps {
  className?: string
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  return (
    <aside className={cn(className, 'basis-[244px] flex-grow-0 flex-shrink-0')}>
      <Title text="Фильтрация" size="xl" className="mb-[25px] text-[22px] font-bold" />

      <div className="flex flex-col gap-4 pb-[25px] mb-[25px] border-b-[1px] border-[#F6F6F6]">
        <FilterCheckbox text="Можно собирать" value="configurable" name="configurable" />
        <FilterCheckbox text="Новинки" value="new" name="new" />
      </div>

      <PriceFilter />
      <IngredientsFilter />
      <DoughTypeFilter />
    </aside>
  )
}

export { Filter }


