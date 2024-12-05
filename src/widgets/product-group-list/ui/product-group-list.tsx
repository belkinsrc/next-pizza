'use client'

import { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import { Title } from '@/src/shared/ui'
import { Product } from '@/src/shared/models'
import { ProductCard } from '@/src/entities/product-card'
import { cn } from '@/src/shared/utils'
import { useActiveCategory } from '@/src/shared/store'
interface ProductGroupListProps {
  products: Product[]
  groupName: string
  className?: string
}

function ProductGroupList({ products, groupName, className }: ProductGroupListProps) {
  const intersectionRef = useRef<HTMLElement>(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })
  const { setActiveCategory } = useActiveCategory.getState()

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(intersection.target.id)
    }
  }, [intersection])

  // useEffect(() => {
  //   const unsubscribeActiveCategory = 
  //     useActiveCategory.subscribe(({ activeCategory }) => {
  //       if (activeCategory === groupName) {
  //         intersectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  //       }
  //     })
  //   return () => {
  //     unsubscribeActiveCategory()
  //   }
  // }, [])

  return (
    <section className={cn(className, 'grow')} ref={intersectionRef} id={groupName}>
      <Title text={groupName} size="xl" className="mb-[25px] text-[30px] font-bold" />
      <div className="grid grid-cols-3 gap-[50px]">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export { ProductGroupList }