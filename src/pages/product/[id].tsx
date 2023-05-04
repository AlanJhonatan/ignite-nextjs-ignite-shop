import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products"

export default function Product(props) {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Mollit est Lorem cillum elit ullamco. Aliquip qui aliquip minim quis minim eu pariatur proident quis commodo. Cupidatat est exercitation deserunt laborum irure nulla cillum. Ex consequat fugiat irure aliqua quis ea aliquip aliqua ipsum nostrud do id dolore reprehenderit.</p>

        <button>Comprar</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  return {
    props: {},
    revalidate: 60 * 60 * 1, //1 hour                                                    
  }
}