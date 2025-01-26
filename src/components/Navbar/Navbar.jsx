// Navbar.jsx
import { useState } from 'preact/hooks';
import listimg from '../../assets/list.svg';
import closeimg from '../../assets/x.svg';
import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [active, setActive] = useState("home");

    function toggleMenu() {
        setisMenuOpen(!isMenuOpen);
    }

    const handleClick = (e) => {
        
        setActive(e.currentTarget.getAttribute('data-value')); // Use e.currentTarget to get the correct element
        window.scroll({
            top:0,
            behavior:"smooth",
            
        })
        setisMenuOpen(false)
    };
    handleClick

    const nav = {
        brand: 'Devendiran E',
    };

    return (
        <nav className="navbar navbar-sm  navbar-expand-md" id="nav">
            <div className="container">
                
                <h1 className="nav-brand h2 pt-2 text-center" href="#">{nav.brand}</h1>
                <span
                    className="navbar-toggler"
                    id="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-navbar"
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-controls="navbar-navbar"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <img src={isMenuOpen ?closeimg : listimg } alt="Toggle Menu" />
                </span>

                <div className={`collapse navbar-collapse   ${
                    isMenuOpen?'show':''}`} id="navbar-navbar">
                    <ul className="navbar-nav  ms-auto">
                        <li data-value="home" onClick={handleClick} className={` nav-item ${active === "home" ? "active" : ""}`}>
                            <a className="nav-link " style={{color:'white' }} href="#"><i className='bi bi-house'></i> Home</a>
                        </li>
                        <li data-value="about" onClick={handleClick} className={` nav-item ${active === "about" ? "active" : ""}`}>
                            <a className="nav-link " style={{color:'white' }} href="#about"><i className='bi bi-person'></i> About</a>
                        </li>
                        <li data-value="skills" onClick={handleClick} className={` nav-item ${active === "skills" ? "active" : ""}`}>
                            <a className="nav-link  "style={{color:'white' }}  href="#skills"><i className='bi bi-journal-code'></i> Skills</a>
                        </li>
                        <li data-value="contact" onClick={handleClick} className={` nav-item ${active === "contact" ? "active" : ""}`}>
                            <a className="nav-link " style={{color:'white' }} href="#contact"><i className='bi bi-telephone'></i> Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}