import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import About from "./components/About/about";
import  Skills  from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import {Router} from 'preact-router'
import "./app.css"
import Footer from "./components/Footer/Footer";
export function App(){
  const toggleScroll = () =>{
      window.scroll({
        
        behavior:'smooth',
      
      })
  }
  return(
    
    <div onChange={toggleScroll} className="appCss">
    <Navbar/>
    <Router>
    <Home path='/' />
    <About path='/about'/>
    <Skills path='/skills'/>
    <Contact path='/contact'/>
    </Router>
    
    <Footer/>
    </div>
  )
}