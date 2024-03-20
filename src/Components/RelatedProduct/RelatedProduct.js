import React from 'react';
import './relatedproduct.css';
import data_product from '../Assets/data';
import Items from '../items/Items';


const RelatedProduct = () => {
  return (
    <div className='related-product'>
        <h1>Related Product</h1>
        <hr />
        <div className='related-product-item'>
            {data_product.map((relatedProduct, index)=>{
                 
                return <Items key={index} id={relatedProduct.id} name={relatedProduct.name}
                 image={relatedProduct.image} new_price={relatedProduct.new_price} old_price={relatedProduct.old_price} />
            })}
        </div>
      
    </div>
  )
}

export default RelatedProduct
