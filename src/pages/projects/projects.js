import { add } from "three/tsl"
import "./project.css"
import React, { useEffect, useState } from 'react';


const expand_text = {"Project #1 (Click to find out more.)":"lovely "}



const Projects = ()=>{
    const [status, setStatus] = useState(0);
    const [originalsettingsheight,setOriginalsettingsheight] = useState("");
    const [originalsettingswidth,setOriginalsettingswidth] = useState("");
    const [originalsettingscontent,setOriginalsettingscontent] = useState("");
    const expand_mod = (e)=>{
        try {
            if (e.target.className == "close-button-project"){
                return
            }
        var alertBox = e.target.parentNode
        var text_content = alertBox.getElementsByTagName("h2")[0];
        var key = alertBox.getElementsByTagName("h1")[0];
        while(alertBox.className != "alert-box-project"){
            alertBox = alertBox.parentNode;
        }
        console.log(status)
        if(status==0){
            // closed
            setOriginalsettingsheight(alertBox.style.height);
            alertBox.style.height = "70vh"
            setOriginalsettingscontent(text_content.innerText)
            console.log(originalsettingscontent); // TODO: fix this issue make the modal expand and all base on original settings
            text_content.innerText= expand_text[key];
            setStatus(1);
        }
        else{
            alertBox.style.height = "10vh";
            alertBox.innerText = originalsettingscontent;
            setStatus(0);
        }
    } catch {
        return
    }
        
    }
    return(
    <div className="projects-wrapper">
        <div className="loading-slider">

            <div className='alert-box-project'style={{"--i":1}} onClick={(e)=>{expand_mod(e)}}>
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
