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
      <footer >
      <div className='info mt-5  text-white '>
        <ul className=' '>
          <li><strong>Email : </strong> <span href="mailto:devendiran@example.com">devendirane2@gamil.com</span></li>
          <li><strong>Phone : </strong> <span href="tel:+911234567890">+91 6374512055</span></li>
          <li><strong>LinkedIn : </strong> <span href="https://linkedin.com/in/devendiran" target="_blank" >linkedin.com/in/devendirane2</span></li>
          <li><strong>GitHub : </strong> <span href="https://github.com/prettycodedirector" target="_blank" >github.com/prettycodedirector</span ></li>
          <li><strong>Location : </strong> Chennai / villuppuram , TamilNadu , India</li>
        </ul>
        
        <div className='in2' style={{ display: "flex", gap: "20px",  }}>
      {/* Mail */}
      <a href="mailto:devendirane2@gmail.com" target="_blank" >
        <i className="icon-footer bi bi-envelope-fill" style={{ color: "#D44638" }}></i>
      </a>
      {/* GitHub */}
      <a href="https://github.com/prettycodedirector" target="_blank" >
        <i className="icon-footer bi bi-github" style={{ color: "#fff" }}></i>
      </a>
      {/* WhatsApp */}
      <a href="https://wa.me/6374512055" target="_blank" >
        <i className="icon-footer bi bi-whatsapp" style={{ color: "#25D366" }}></i>
      </a>
      {/* Instagram */}
      <a href="https://instagram.com/devendiran_maker_offi" target="_blank" >
        <i className="icon-footer bi bi-instagram" style={{ color: "#E4405F" }}></i>
      </a>
      {/* Twitter */}
      <a href="https://x.com/DirectorDevend1?t=Ql6mWuztofUQB6KIz9vNiw&s=08" target="_blank" >
        <i className="icon-footer bi bi-twitter" style={{ color: "#1DA1F2" }}></i>
      </a>
    
        </div>
      </div>
      </footer>
      <div className='text-center copy-con pt-3'>
      <em>Copyright  <i className='bi s bi-c-circle'></i> 2024 .</em>
      <br /><em>Createdy by Devendiran , All Rights Reserved .</em>
      </div>
    </div>
  );
};

export default ContactForm;