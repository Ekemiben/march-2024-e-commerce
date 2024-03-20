import React from 'react';
import './newsLetter.css';

const NewsLetter = () => {
  return (
    <div  className='news-letter'>
        <h1>Get Exclusive Offers on You Email</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div>
            <input type = "email" placeholder='Your Email id'></input>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
