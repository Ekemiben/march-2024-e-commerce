import React from 'react'
import './newcollections.css'
import new_collection from '../Assets/new_collections'

import Items from '../items/Items'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {new_collection.map((newCollection, index)=>{
            return <Items key={index} id={newCollection.id} name={newCollection.name} image={newCollection.image} new_price={newCollection.new_price} old_price={newCollection.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollections
