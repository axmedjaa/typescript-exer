interface products{
    name:string,
    price:number,
    description?:string
}
const ProductCard = (props:products) => {
  return (
    <div>
        <h1>{props.name}</h1>
        <h4>{props.price}</h4>
        {
        props.description&&<h4>{props.description}</h4>  
        }
    </div>
  )
}

export default ProductCard