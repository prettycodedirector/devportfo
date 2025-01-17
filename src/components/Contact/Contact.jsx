import { useRef } from 'preact/hooks';
import emailjs from '@emailjs/browser';
import './Contact.css'
import git from '../.././assets/github.svg'
const ContactForm = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(

      'service_4e7vcsh',
      'template_g2hgqqd',
      form.current,
      '9ToVqPnJsTm2h_VlL'
    )
      .then((result) => {
        console.log('Message sent:', result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Error:', error.text);
        alert('Failed to send message. Try again later.');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div id='contact' className='contact'>
      <label className='h3  mb-4'>Contact Us:</label>
      
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '500px', margin: 'auto' }}>
        <label>Name:</label>
        <input type="text" name="to_name" required placeholder='Enter your name' />
        <label>Email:</label>
        <input type="email" name="from_name" required placeholder='Enter your email' />
        <label>Message:</label>
        <textarea name="message" required placeholder='Your comment here' />
        <button type="submit">Send</button>
      </form>
      
    </div>
  );
};

export default ContactForm;