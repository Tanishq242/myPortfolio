import './App.css'
import './components/projectpage.css'
import Homepage from './components/homepage'
import Projectcomponent from './components/projectpage'
import Contactpage from './components/contactpage'
import Aboutpage from './components/aboutpage'

function App() {
  return (
    <>
      <Homepage mypic='.\public\images\mynewpic.png' />
      <Aboutpage
        aboutContent='I am a BCA student with hands-on experience in Java and web development. Through academic and personal projects, I have developed strong problem-solving skills and gained practical exposure to real-world application development. I am eager to join an organization where I can apply my technical skills, collaborate with experienced developers, and continue growing as a software professional.'
        frontendSkill='JavaFX, HTML, CSS, React'
        backendSkill='Java, Python, JavaScript, Php, Node.js, Express.js'
        databaseSkill='MySql, MongoDB'
        vcsSkill='Git and Github'
        projectCount='4' />
      <div className="project-root" id='project'>
        <h1>Recent Work</h1>
        <p>A collection of projects I've worked on.</p>
        <Projectcomponent
          projectTitle='File Organizer Software'
          projectDescription='Designed a Java-based file organizer that automatically categorizes and sorts files into folders based on their types, improving file management efficiency.'
          imagePath='public\images\fileorg.png'
          headTitle='head-title'
          detailDirection='project-detail-right'
          projectPara='projectPara-right'
          imgDirection='project-img-box-right'
          BackgroundColorDir='project-content-right'
          projectURL='https://github.com/Tanishq242/File-Flow.git'
          svgIcon={[
            { id: 1, path: 'public/images/java.svg' }
          ]}
          svgPosition='svgList-right'
        />
        <Projectcomponent
          projectTitle='Secure Chat Software'
          projectDescription='Implemented full stack java message software maintaining security and privacy and working on client-server architecture. This project having unique features that make it different from traditional message software.'
          imagePath='public\images\chatApp.png'
          BackgroundColorDir='project-content-left'
          svgIcon={[
            { id: 1, path: 'public/images/java.svg' },
            { id: 2, path: 'public/images/mysql.svg' }
          ]}
        />
        <Projectcomponent
          projectTitle='Algorithm Visualizer Software'
          projectDescription='Designed a GUI-based tool to visualize algorithms like searching, sorting and scheduling in real-time using Python. Helps students understand algorithm flow step-by-step.'
          imagePath='public\images\avs.png'
          headTitle='head-title'
          detailDirection='project-detail-right'
          projectPara='projectPara-right'
          imgDirection='project-img-box-right'
          BackgroundColorDir='project-content-right'
          projectURL='https://github.com/Tanishq242/AVS-python-project.git'
          svgIcon={[
            { id: 1, path: 'public/images/python.svg' }
          ]}
          svgPosition='svgList-right' />
        <Projectcomponent
          projectTitle='Mock Test Website'
          projectDescription='Implemented full stack mock test website with dynamic result generation. UI is developed using HTML, CSS and JS and backend powered by PHP and MySQL database with user data handling.'
          imagePath='public\images\mock.png'
          BackgroundColorDir='project-content-left'
          svgIcon={[
            { id: 1, path: 'public/images/html.svg' },
            { id: 2, path: 'public/images/css3.svg' },
            { id: 3, path: 'public/images/javascript.svg' },
            { id: 4, path: 'public/images/php.svg' },
            { id: 5, path: 'public/images/mysql.svg' }
          ]} />
        <Projectcomponent
          projectTitle='Video Streaming Website'
          projectDescription='Implemented a responsive web interface for browsing and playing media on PCs, smartphones, and smart TVs.'
          imagePath='public\images\stream.png'
          headTitle='head-title'
          detailDirection='project-detail-right'
          projectPara='projectPara-right'
          imgDirection='project-img-box-right'
          BackgroundColorDir='project-content-right'
          svgIcon={[
            { id: 1, path: 'public/images/html.svg' },
            { id: 2, path: 'public/images/css3.svg' },
            { id: 3, path: 'public/images/javascript.svg' },
            { id: 4, path: 'public/images/nodejs.svg' }
          ]}
          svgPosition='svgList-right' />
      </div>
      <Contactpage />
    </>
  )
}

export default App
