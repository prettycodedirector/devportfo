import './Home.css';
import phoneImg from '../../assets/telephone-plus.svg';
import arrowImg from '../../assets/arrow-down.svg';
import homeDev from '../../assets/home-devendiran-removebg-preview.png';

const Home = () => {
    const downloadFunction = () => {
        const a = document.createElement('a');
        a.href = './devendiraneResume.pdf';
        a.download = 'devendiraneResume.pdf';
        a.click();
    };

    return (
        <section id="home" className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-welcome"> Welcome to my portfolio!</p>
                    <h1 className="hero-title">Hello, I’m <span>Devendiran E</span></h1>
                    <p className="hero-subtitle">
                        A full-stack developer specializing in the <strong>MERN stack</strong>. Ready to bring your ideas to life!
                    </p>
                    <div className="hero-buttons">
                        <a href="#contact-" id='contact'>
                            <button className="hero-btn">
                                Contact Me <img src={phoneImg} alt="Contact Icon" />
                            </button>
                        </a>
                        <button className="hero-btn" onClick={downloadFunction}>
                            Resume <img src={arrowImg} alt="Download Resume" />
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={homeDev} alt="Devendiran - Full Stack Developer" />
                </div>
            </div>
        </section>
    );
};

export default Home;
