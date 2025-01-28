import { add } from "three/tsl"
import "./project.css"
import React, { useEffect, useState } from 'react';


const Projects = ()=>{

    return(
    <div className="projects-wrapper">
        <div className="loading-slider">

            <div className='alert-box-project'style={{"--i":1}}>
                <div className='box-top-project'>
                    <h1>Project #1 (Click to find out more.)</h1>
                    <img className='close-button-project' src='svg/close.svg' onClick={()=>{
                        window.location = "/"
                        sessionStorage.setItem("prev-page-status","return");
                    }}/>
                </div>
                <div className='alert-text-wrapper-project'>
                <img className='alert-icon-project' src='pictures/neat.gif' />
                <div className="text-value-project">
                    <h1 className='alert-text-project'>Lorem Ipsum</h1>
                    <h2 className="body-text-project">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sodales enim, vel aliquet orci semper ac. Vivamus vitae posuere est.</h2>
                </div>
                </div>
            </div>



        </div>
    </div>)
}

export default Projects
