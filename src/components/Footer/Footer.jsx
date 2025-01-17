import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-con'>
      <footer >
      <div className='info  text-white '>
        <ul >
          <li><strong>Email : </strong> <span href="mailto:devendiran@example.com">devendirane2@gamil.com</span></li>
          <li><strong>Phone : </strong> <span href="tel:+911234567890">+91 6374512055</span></li>
          <li><strong>LinkedIn : </strong> <span href="https://linkedin.com/in/devendiran" target="_blank" >linkedin.com/in/devendirane2</span></li>
          <li><strong>GitHub : </strong> <span href="https://github.com/prettycodedirector" target="_blank" >github.com/prettycodedirector</span ></li>
          <li><strong>Location : </strong> Chennai / villuppuram , TamilNadu , India</li>
        </ul>
        
        <div  >
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
  )
}

export default Footer
