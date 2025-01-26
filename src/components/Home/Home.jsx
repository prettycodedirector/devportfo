import './Home.css'
import phoneImg from '../../assets/telephone-plus.svg'
import arrowImg from '../../assets/arrow-down.svg'
const Home = () => {
    const downloadFunction = () => {
        const a = document.createElement('a')
        a.href = './devendiran_resume.pdf'
        a.download = 'devendirane_resume.pdf'
        a.click()
    }
    const data = {
        name: "I’m Devendiran E",
        description: 'a full-stack developer specializing in the MERN stack. Ready to bring your ideas to life!'
    }
    return (
        <section id='home'>

            <div className='home-sub'>
                <span className=' '>Welcome to my portfolio!</span>
                <h1><span className='h5 px-2'>hello</span>{data.name}</h1>
                <p>{data.description}</p>
                <div>
                    <a href="/contact" ><button  style={{backgroundColor:"#ee6c4d",fontWeight:'400'}} className='text-light btn rounded-pill home-btn mx-4 ' type='button'   >Contact Me <img className='' src={phoneImg} alt="" /></button></a>
                    <button style={{backgroundColor:"#ee6c4d",fontWeight:'400'}} className='text-light btn rounded-pill home-btn' onClick={downloadFunction} type='button  '
                    >Resume <img className='' src={arrowImg} alt="" /></button>
                </div>

            </div>

        </section>
    )
}
export default Home;