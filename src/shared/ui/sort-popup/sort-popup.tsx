import { cn } from '@/src/shared/utils/utils'
import { ArrowUpDown } from 'lucide-react'

interface Props {
  className?: string
}

const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, '')}>
      <ArrowUpDown />
      Сортировка:
      <b className="text-primary">рейтингу</b>
    </div>
  )
}

export { SortPopup }
