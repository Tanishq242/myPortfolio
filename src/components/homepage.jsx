import { Link } from 'react-scroll'
import './homepage.css'
import Nametypewriter from '../components/typingtext'

const navbar = (props) => {
    return (
        <div className="homepage-root" id='home'>
            <div className='root-navbar'>
                <div className="dev-name">My Portfolio Website</div>
                <div className="navbar-options">
                    <ul className="options-list">
                        <li onClick={() => console.log("clicked on about")}>
                            <Link to="home" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="project" smooth={true} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>
                                About us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content-root">
                <div className="content-box">
                    <Nametypewriter />
                    <h3>Full Stack Java Developer</h3>
                    <p>BCA 3rd-year student with strong skills programming in Java. Experienced in database management with SQL and cloud
                        computing using AWS. Also proficient in video editing, graphic
                        design, and productivity tools, bringing both technical expertise
                        and creative problem-solving to projects.</p>
                </div>
                <div className="image-box">
                    <img src={props.mypic} alt="my image" />
                </div>
            </div>
        </div>
    )
}

export default navbar