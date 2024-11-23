import { TopBar } from '@/src/widgets/top-bar'
import { Container } from '@components/shared/ui/container'
import { Title } from '@components/shared/ui/title'


export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="2xl" className="mb-5" />
      </Container>
      <TopBar className="sticky top-5 z-10 w-full pb-5" />
    </>
  )
}
