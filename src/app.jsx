import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import About from "./components/About/about";
import  Skills  from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./app.css"
export function App(){
  const toggleScroll = () =>{
      window.scroll({
        
        behavior:'smooth',
      
      })
  }
  return(
    
    <div onChange={toggleScroll} className="appCss">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  )
}