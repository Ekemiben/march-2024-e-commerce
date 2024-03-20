import React from 'react';
import './CSS/shopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from'../Components/items/Items';

const ShopCategory = (props) => {
    const{ all_products} = useContext(ShopContext);
     
  return (
    <div className='shop-category'>
      <img src={props.banner} className='shopcategory-banner'/>

      <div className='shopcategory-index-sort'>
        <p>
            <span>Showing 1-12 </span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
            Sort by <img src={dropdown_icon} alt=''></img>
        </div>
      </div>
      <div className='shopcategory-product'>
        {all_products.map((productCategory, index)=>{
          console.log(productCategory)

            if(props.category === productCategory.category){
                return <Item  key={index} id={productCategory.id} name={productCategory.name}  image={productCategory.image} new_price={productCategory.new_price} old_price={productCategory.old_price} /> 
            }
            else{
                return (null)
            }
        })}

      </div>
      <div className='shopcategory-load-more'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
