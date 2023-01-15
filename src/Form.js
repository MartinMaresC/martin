
import './css/Form.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import email from './email.png';
import whatsapp from './telephone.png';
import posicion from './marcador-de-posicion.png';


function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bbzacpu', 'template_doyfvbq', form.current, 'Rh_dzfVVKjT3CiUZz')
        .then((result) => {
            alert('Your message has been sent to Martin');
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <>
<section class="contenedor">
<div class='titulo'>
<h2 class="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
    <p class="text-justify w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you as soon as possible once your message has been received.</p>
</div>
<div class='contacto'>
    <div class='forma'>
    <form ref={form} onSubmit={sendEmail}>
     
     <input className='remitente' type="text" name="user_name" placeholder='Your name here ...'/> <br />
     <input className='remitente' type="email" name="user_email" placeholder='Your email here...'/>
     <br />
     <textarea className='mensaje' name="message" placeholder='Please leave a message ...'/><br />
     <input class='submit' type="submit" value="Send"  />
   </form>
   </div>
   <div class='datos'>
    <p class='p'><img src={whatsapp} />449 394 76 74</p>
    <p class='p'><img src={email} />martinmarescr@gmail.com</p>
    <p class='p'><img src={posicion} />martinmarescr@gmail.com</p>
   </div>
</div>   
</section>

</>
  );
}

export default Form;
