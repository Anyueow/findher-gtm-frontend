import React from 'react'
import "./SectionSeven.css"
export const SectionSeven = () => {
  return (
    <div className='sec-seven-container'>
        <div className='sec-seven-heading'>Join the Community</div>
        <p className='sec-seven-para'>Subscribe to our newsletter to get all the latest updates and news from FindHer. We'll keep you up-to-date with the latest job opportunities and career advice.</p>
        <div className='sec-seven-form'>
        <input type="text" className='sec-seven-input' placeholder='youremail@example.com'/>
            <button className='sec-seven-button'>Sign Up</button>
        </div>
    </div>
  )
}
