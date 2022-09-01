import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="/" id='contact' className='btn btn-primary'>Lets Talk</a>
      
    </div>
  )
}

export default CTA
