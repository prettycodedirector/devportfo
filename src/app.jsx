import Navbar from "./components/Navbar/navbar";
import Home from './components/Home/Home'
import About from "./components/About/about";
import  Skills  from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
export function App(){
  const toggleScroll = () =>{
      window.scroll({
        
        behavior:'smooth',
      
      })
  }
  return(
    
    <div onChange={toggleScroll}>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
    </div>
  )
}