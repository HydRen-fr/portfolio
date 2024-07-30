import React from 'react';
import "./Contact.css";

const Contact = () => {
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get in touch</h2>
      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'> Let's talk!</h3>
        </div>

        <form action="mailto:hbringuet@numericable.fr" method="post" enctype="text/plain" className='contact__form'>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input type='text' className='contact__form-input' placeholder='Your name'/>
            </div>
            
            <div className='contact__form-div'>
              <input type='email' className='contact__form-input' placeholder='Insert your email'/>
            </div>
          </div>

          <div className='contact__form-div'>
              <input type='text' className='contact__form-input' placeholder=''/>
            </div>

            <div className='contact__form-div contact__form-area'>
              <textarea name='' id='' cols={30} rows={10} className='contact__form-input' placeholder=''></textarea>
            </div>
             <button className='btn'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
