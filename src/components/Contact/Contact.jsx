import { useRef } from 'preact/hooks';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
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

    e.target.reset();
  };

  return (
    <section id="contact-" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello .</p>
 
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="to_name" required placeholder="Enter your name" />
        
        <label>Email</label>
        <input type="email" name="from_name" required placeholder="Enter your email" />
        
        <label>Message</label>
        <textarea name="message" required placeholder="Write your message here..." rows="5" />
        
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
