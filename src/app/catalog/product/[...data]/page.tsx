import { AddToCartButton } from './add-to-cart-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/gustavopolonio')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
