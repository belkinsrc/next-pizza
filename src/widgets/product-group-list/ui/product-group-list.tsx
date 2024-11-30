'use client'

import { useRef, useEffect } from 'react'
import { useIntersection } from 'react-use'
import { Title } from '@/src/shared/ui'
import { Product } from '@/src/shared/models'
import { ProductCard } from '@/src/entities/product-card'
import { cn } from '@/src/shared/utils'
interface ProductGroupListProps {
  products: Product[]
  groupName: string
  className?: string
}

function ProductGroupList({ products, groupName, className }: ProductGroupListProps) {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log('Intersecting: ' + intersection.target.id)
    }
  }, [intersection])

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