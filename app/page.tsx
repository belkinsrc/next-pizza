import { Container } from '@components/shared/ui/container'
import { Title } from '@components/shared/ui/title'
import { Categories } from '@components/shared/ui/categories'
import { SortPopup } from '@components/shared/ui/sort-popup'

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="2xl" className="mb-5" />
        <Categories />
        <SortPopup />
      </Container>
    </>
  )
}
