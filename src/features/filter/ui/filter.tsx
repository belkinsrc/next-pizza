import { cn } from '@components/shared/utils'
import { Title } from '@components/shared/ui'
import { PriceFilter } from './price-filter'
import { IngredientsFilter } from './ingredients-filter'
import { AdditionalFilter } from './addtitional-filter'

interface FilterProps {
  className?: string
}

const Filter: React.FC<FilterProps> = ({ className }) => {
  return (
    <aside className={cn(className, 'basis-[244px] flex-grow-0 flex-shrink-0')}>
      <Title
        text="Фильтрация"
        size="xl"
        className="mb-[25px] text-[22px] font-bold"
      />
      <AdditionalFilter />
      <PriceFilter />
      <IngredientsFilter visibleItems={5} title="Ингредиенты:" />
    </aside>
  )
}

export { Filter }
