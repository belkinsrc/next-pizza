import { TopBar } from '@/src/widgets/top-bar'
import { Container } from '@components/shared/ui'
import { Title } from '@components/shared/ui'
import { Filter } from '@components/features/filter'
import { ProductGroupList } from '@/src/widgets/product-group-list/ui/product-group-list'
import { products } from '@/src/shared/data'

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="2xl" className="mb-5" />
      </Container>
      <TopBar className="sticky top-5 z-10 w-full pb-5" />
      <Container className="flex gap-16 pt-9">
        <Filter />
        <div className="flex flex-col gap-10 pt-[30px]">
          <ProductGroupList products={products} groupName="Мясные" />
          <ProductGroupList products={products} groupName="Острые" />
          <ProductGroupList products={products} groupName="Сладкие" />
          <ProductGroupList products={products} groupName="Вегетарианские" />
          <ProductGroupList products={products} groupName="С курицей" />
        </div>
      </Container>
    </>
  )
}
