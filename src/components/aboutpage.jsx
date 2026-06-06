import './aboutpage.css'

const aboutpage = (props) => {
    return (
        <div className="about-root" id='about'>
            <h1>About me</h1>
            <div className="about-box">
                <div className="about-content">
                    <p>{props.aboutContent}</p>
                </div>
                <div className="skill-content">
                    <h3>Technical Stack</h3>
                    <ul>
                        <li><strong>Frontend: </strong> {props.frontendSkill}</li>
                        <li><strong>Backend: </strong>{props.backendSkill}</li>
                        <li><strong>Databases: </strong>{props.databaseSkill}</li>
                        <li><strong>Version Control: </strong>{props.vcsSkill}</li>
                    </ul>
                </div>
                <div className="project-count">
                    <h3>Number of completed projects</h3>
                    <p>{props.projectCount}</p>
                </div>
                <div className='resume-box'>
                    <h3>My Resume</h3>
                    <div><a href="https://drive.google.com/file/d/1aC3XIR--_7l4B8DXEYoIAuEZDfkEzmd8/view?usp=sharing" target='_blank'><img src="src/assets/pdf.svg" alt="" className='resumeIcon' /></a></div>
                </div>
            </div>
        </div>
    )
}

export default aboutpage