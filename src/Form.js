
import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bbzacpu', 'template_doyfvbq', form.current, 'Rh_dzfVVKjT3CiUZz')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    
<section class="forma">

<h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you as soon as possible once your message has been received.</p>

    
    <div>
    <form ref={form} onSubmit={sendEmail}>
     
     <input type="text" name="user_name" placeholder='Your name here ...'/>
     
     <input type="email" name="user_email" placeholder='Your email here...'/>
     
     <textarea name="message" placeholder='Please leave a message ...'/>
     <input type="submit" value="Send" />
   </form>
   <div class="datos">
    Datos
   </div>
    </div>

</section>

  );
}

export default Form;
