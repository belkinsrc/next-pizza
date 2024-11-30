import Link from "next/link"
import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/src/shared/lib/button"
import { Title } from "@/src/shared/ui"
import { cn } from "@/src/shared/utils"

interface ProductCardProps {
  id: string
  name: string
  price: number
  imageSrc: string
  className?: string
}

function ProductCard({ id, name, price, imageSrc, className }: ProductCardProps) {
  return (
    <article className={cn(className, '')}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center items-center px-[37px] py-[24px] bg-[#FFF7EE] rounded-[15px] mb-[15px]">
          <Image 
            src={imageSrc}
            alt={name} 
            width={212} 
            height={212}
          />
        </div>
        <Title text={name} size="lg" className="mb-[7px] text-[22px] font-bold" />
        <p className="text-[14px] text-[#B1B1B1] mb-[13px]">Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок</p>
        <div className="flex justify-between">
          <span className="text-[20px]">от <b>{price} ₽</b></span>
          <Button variant="secondary" className="ml-auto">
            <Plus />
            Добавить
          </Button>
        </div>
      </Link>
    </article>
  )
}

export { ProductCard }