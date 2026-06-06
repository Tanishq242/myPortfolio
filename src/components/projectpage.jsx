import React from 'react'
import './projectpage.css'

const projectpage = (props) => {
    return (
        <div className="project-content" id={props.BackgroundColorDir}>
            <div className="project-detail" id={props.detailDirection}>
                <p id={props.headTitle}>Featured Project</p>
                <h2 id={props.headTitle}>{props.projectTitle}</h2>
                <div className='project-description' id={props.projectPara}>{props.projectDescription}</div>
                <ul className='svgList' id={props.svgPosition}>
                    {props.svgIcon.map((item) => {
                        return (
                            <li key={item.id}>
                                <img src={item.path} className="svgIcon" alt="icon" />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="project-img-box" id={props.imgDirection}>
                <a href={props.projectURL} target="_blank">
                    <img src={props.imagePath} alt="project image" className='projectPic' />
                </a>
            </div>
        </div>
    )
}

export default projectpage  