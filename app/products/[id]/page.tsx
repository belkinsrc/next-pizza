interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const id = (await params).id

  return <div>Product {id}</div>
}
