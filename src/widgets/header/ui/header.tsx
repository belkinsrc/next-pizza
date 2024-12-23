import Image from 'next/image'
import { cn } from '@/src/shared/utils/utils'
import logo from '@/public/images/logo.png'
import { Container, SearchInput } from '@/src/shared/ui'
import { Button } from '@/src/shared/lib/button'
import { User, ShoppingCart, ArrowRight } from 'lucide-react'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(className)}>
      <Container className="flex justify-between items-center">
        <div className="grid grid-cols-[max-content_max-content] grid-rows-[auto_auto]">
          <Image
            src={logo}
            width={35}
            height={35}
            alt="Логотип Next Pizza"
            className="row-span-2 self-center mr-[15px]"
          />
          <h1 className="text-2xl font-black">NEXT PIZZA</h1>
          <p className="text-base text-[#7B7B7B] font-normal col-start-2">
            вкуснее уже некуда
          </p>
        </div>
        <SearchInput />
        <div className="flex items-center gap-4">
          <Button variant={'outline'} className="flex items-center gap-[5px]">
            <User size={16} />
            Войти
          </Button>
          <Button className="relative flex items-center group gap-[13px]">
            <b>0 ₽</b>
            <span className="h-full w-[1px] bg-white opacity-25"></span>
            <div className="flex items-center gap-2 group-hover:opacity-0 transition-opacity duration-300">
              <ShoppingCart size={16} />
              <b>0</b>
            </div>
            <ArrowRight
              size={20}
              className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Button>
        </div>
      </Container>
    </header>
  )
}

export { Header }
