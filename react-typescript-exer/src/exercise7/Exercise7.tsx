import ProductCard from "./ProductCard"
import Welcome from "./Welcome"

function Exercise7() {
  return (
    <div>
        <Welcome username="alicad" isPremium={true}/>
        <ProductCard name="ahmed" price={20} />
        <ProductCard name="ahmed" price={20} description="welcome customer"/>
    </div>
  )
}

export default Exercise7