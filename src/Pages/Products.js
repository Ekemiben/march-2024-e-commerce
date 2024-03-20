import React, {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrumbs/Breadcrum'
import ProductDisplay from '../Components/ProductsDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

const Products = () => {
  const {all_products} = useContext(ShopContext)
  
  const {productId} = useParams(); //if e.id === product id
  const product = all_products?.find((prod)=> prod.id === Number(productId) )

  // const product = all_product?.find((prod)=> {console.log(prod)} )
  // const product = (all_product || []).find((prod)=> prod.id === Number(productId) )
  
  return (
    
    <div>
      < Breadcrum product={product} />
     <ProductDisplay product = {product} />
     <DescriptionBox  />
     <RelatedProduct />
    </div>
  )
}

export default Products
