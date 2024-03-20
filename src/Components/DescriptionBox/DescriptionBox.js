import React from 'react';
import './descriptionbox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box'>
      <div className=' description-box-navigator'>
        <div className='description-box-nav-box'>Description</div>
        <div className='description-box-nav-box fad'>Reviews (122)</div>
      </div>
      <div className='description-box-description'>
        <p>As a system administrator, you’ll need to know how to look at the status of a running service, and how to stop, start, and restart running services. You’ll also need to know how to configure services and fix problems you may encounter while running them. In this lab, we’ll focus on how to do this actions on Windows.</p>
        <p>This course uses a third-party app, Qwiklabs Assessment: Managing Services in Windows[Optional], to enhance your learning experience. The app will reference basic information like your name, email, and Coursera ID.2</p>
      </div>
    </div>
  )
}

export default DescriptionBox
