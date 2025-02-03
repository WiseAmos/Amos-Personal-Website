import "./project.css"
import React, { useEffect, useState } from 'react';
import Expand from "../../components/alert-box-expand/expand";
import { context } from "three/tsl";

const project_content = [
    {
        maintitle:"Project #1 (Click to find out more.)",
        subtitle:"xin er!!!",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sodales enim, vel aliquet orci semper ac. Vivamus vitae posuere est.",
        link:"https://www.github.com",
        img:"pictures/neat.gif",
    },
    {
        maintitle:"Project #1 (Click to find out more.)",
        subtitle:"xin er!!!",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sodales enim, vel aliquet orci semper ac. Vivamus vitae posuere est.",
        link:"github.com",
        img:"pictures/neat.gif",
    },
    {
        maintitle:"Project #1 (Click to find out more.)",
        subtitle:"xin er!!!",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sodales enim, vel aliquet orci semper ac. Vivamus vitae posuere est.",
        link:"github.com",
        img:"pictures/neat.gif",
    },
    {
        maintitle:"Project #1 (Click to find out more.)",
        subtitle:"xin er!!!",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sodales enim, vel aliquet orci semper ac. Vivamus vitae posuere est.",
        link:"github.com",
        img:"pictures/neat.gif",
    },
    {
        maintitle:"Project #1 (Click to find out more.)",
        subtitle:"xin er!!!",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sodales enim, vel aliquet orci semper ac. Vivamus vitae posuere est.",
        link:"github.com",
        img:"pictures/neat.gif",
    }
]



const Projects = ()=>{

    return(
    <div className="projects-wrapper">
        <div > 
            <img className='back-icon' src='svg/back-arrow.svg' onClick={()=>{
                    window.location = "/"
                    sessionStorage.setItem("prev-page-status","return");
                }}/>
        </div>
        <div className="loading-slider">
            {project_content.map( info => <Expand maintitle={info["maintitle"]} subtitle={info["subtitle"]} content={info["content"]} link={info["link"]} img={info['img']} />)}
        </div>
    </div>)
}

export default Projects
