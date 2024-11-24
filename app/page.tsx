import { TopBar } from '@/src/widgets/top-bar'
import { Container } from '@components/shared/ui'
import { Title } from '@components/shared/ui'
import { Filter } from '@components/features/filter'

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="2xl" className="mb-5" />
      </Container>
      <TopBar className="sticky top-5 z-10 w-full pb-5" />
      <Container>
        <Filter />
      </Container>
    </>
  )
}
