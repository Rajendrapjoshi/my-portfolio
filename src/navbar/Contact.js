import React from 'react'

const Contact = () => {
  return (
  <>
    <div className='contact'>
     <form action="https://formspree.io/f/xeqwjypq"
       method="POST">
    
      <div className='contact_firstbox'>
      Your Name : <input type="text" name='name' required></input>
      </div>
      <div className='contact_secondbox'>
      Your Email : <input type="email" name="email"  required ></input>
      
      </div>
      

      <div className='contact_thirdbox'>
      Message : <input type="text" placeholder="Type your message..." name="message" required></input>
      </div>

      
        <button  className='contact_button'>send</button>
      
    </form>
    </div>
  </>
  );
};

export default Contact
