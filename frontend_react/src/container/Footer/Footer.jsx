import { useState } from 'react'
import {AppWrap, MotionWrap} from '../../wrapper'
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    message : ""
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) =>{
      const {name , value} = e.target;

      setFormData({...formData, [name]: value})
  }

  const {name, email , message} = formData;

  const handleSubmit = ()=>{
      console.log('heyy');
  }

  return (
    <>
      <h2 className='head-text'>Take A Coffee & Chat with me</h2>

      <div className='app__footer-cards'>
         <div className='app__footer-card' >
           <img src='../../assets/email.png' alt='Email' />
           <a href='mailTo:rayalravi2001@gmail.com' >rayalravi2001@gmail.com</a>
         </div>

         <div className='app__footer-card' >
           <img src='../../assets/mobile.png' alt='Mobile' />
           <a href='phon:+91 8882719097' >+91 8882719097</a>
         </div>
      </div>

      <div className='app__footer-form'>
        <div>
          <input type='text' name='name' onChange={handleInputChange} placeholder='Your name' />
        </div>
        <div>
          <input type='email' name='email' onChange={handleInputChange} placeholder='Your email' />
        </div>
        <div>
          <textarea type='textarea' name='message' onChange={handleInputChange} placeholder='Your message' />
        </div>
        <button onClick={handleSubmit} >{loading? 'Submitting': 'Submit'}</button>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)