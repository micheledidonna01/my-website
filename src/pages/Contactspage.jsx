import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export default function Contactspage() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    emailjs.sendForm(import.meta.env.REACT_APP_EMAILJS_SERVICE_ID, import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          alert('Email inviata con successo!');
          formRef.current.reset();
          console.log(result.text);
      }, (error) => {
        console.log(error);
          alert('Si è verificato un errore durante l\'invio dell\'email.');
      });
  };
  
  return (
    <div className='py-5 contact'>
      <div className="container text-white">
        <h2 className="mb-4">Contattaci</h2>
        <p className="mb-4">Hai domande, richieste o hai bisogno di assistenza? Compila il modulo qui sotto o contattaci direttamente!</p>

        <div className="row">
          <div className="col-md-6">
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome</label>
                <input type="text" className="form-control" id="name" placeholder="Inserisci il tuo nome" name='user_name'/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="esempio@email.com" name='user_email'/>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Messaggio</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Scrivi il tuo messaggio..." name='message'></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Invia</button>
            </form>
          </div>
          <div className="col-md-6">
            <h5 className="mt-4 mt-md-0">Informazioni di contatto</h5>
            <p><strong>Email:</strong> <a href="mailto:micheledidonna337@gmail.com">micheledidonna337@gmail.com</a></p>
            <p><strong>Telefono:</strong><a href="tel:+393388546403"> +39 338 854 6403</a></p>
            <p><strong>Indirizzo:</strong> Via Gian Francesci Sforza 11, Noicattaro(BA), Italia</p>
          </div>
        </div>
      </div>
    </div>
  );
}