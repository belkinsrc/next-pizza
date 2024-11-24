import { cn } from '@/src/shared/utils/utils'
import { Categories } from '@components/shared/ui/categories'
import { SortPopup } from '@components/shared/ui/sort-popup'
import { Container } from '@components/shared/ui/container'

interface TopBarProps {
  className?: string
}

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div className={cn(className, 'flex justify-between items-center shadow-lg shadow-black/5')}>
      <Container className='flex justify-between'>
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}

export { TopBar }

