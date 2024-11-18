import { cn } from '@/src/shared/utils/utils'

interface Props {
  className?: string
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn(className, 'mx-auto container px-[15px] flex')}>
      {children}
    </div>
  )
}

export { Container }
