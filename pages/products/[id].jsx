import { useRouter } from "next/router"

const ProductDynamic = () => {

    const router = useRouter()
    const {id} = router.query
    console.log(id, "ProductDynamic")
  return (
    <div>id</div>
  )
}

export default ProductDynamic