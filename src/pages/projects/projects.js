import "./project.css"
import React, { useEffect, useState } from 'react';
import Expand from "../../components/alert-box-expand/expand";
import { context } from "three/tsl";
const project_content = [
    {
        maintitle: "Project #1",
        subtitle: "Trojan / Virus Development",
        content: "Developed a persistent virus/backdoor while bypassing antivirus signature recognition. Conducted advanced reverse engineering using tools like x64dbg.",
        link: "", // Replace with actual link
        img: "pictures/virus.gif",
    },
    {
        maintitle: "Project #2",
        subtitle: "Data Visualization for Schools",
        content: "Built a software solution to visualize students' data efficiently. Developed the frontend and backend using React, Flask, and Express.",
        link: "", // Replace with actual link
        img: "pictures/data-visual.gif",
    },
    {
        maintitle: "Project #3",
        subtitle: "Automated OSINT & Web Scraping",
        content: "Created an OSINT framework for automated background checks. Bypassed bot protection mechanisms such as Cloudflare to scrape valuable data.",
        link: "", // Replace with actual link
        img: "pictures/osint.gif",
    },
    {
        maintitle: "Project #4",
        subtitle: "Embedded Hacking Tools",
        content: "Utilized Raspberry Pi and ESP-32 to build cybersecurity tools like rubber duckies and network packet capture devices for penetration testing.",
        link: "", // Replace with actual link
        img: "pictures/hardware.gif",
    },
    {
        maintitle: "Project #5 (Click to find out more.)",
        subtitle: "NEAT Machine Learning Research (Finance Purposes)",
        content: "Researched and implemented NEAT genetic algorithms to evolve neural networks. Modified existing algorithms for improved training performance.",
        link: "https://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf",
        img: "pictures/neat.gif",
    },
    {
        maintitle: "Project #6",
        subtitle: "Server Hardening & Firewalls",
        content: "Configured and secured Linux and Active Directory servers. Implemented Palo Alto firewall policies and site-to-site VPNs.",
        link: "", // Replace with actual link
        img: "pictures/server.gif",
    },
    {
        maintitle: "Project #7",
        subtitle: "Penetration Testing & Bug Bounties",
        content: "Participated in HackerOne programs, discovering a CVSS 8.1 race condition exploit. Conducted security assessments using Nmap, Ettercap, and more.",
        link: "", // Replace with actual link
        img: "pictures/pentest.gif",
    },
    {
        maintitle: "Project #8",
        subtitle: "Amazon AWS Accelerator",
        content: "Solved real-world problems using machine learning. Applied design thinking, data harvesting, and mathematical modeling to develop AI solutions.",
        link: "github.com", // Replace with actual link
        img: "pictures/aws.gif",
    },
    {
        maintitle: "Project #9",
        subtitle: "Geekout 2024 Hackathon",
        content: "Designed and built a web architecture under a 24-hour deadline. Worked on fine-tuning LLMs and rapid prototyping for a functional solution.",
        link: "github.com", // Replace with actual link
        img: "pictures/hackaton.gif",
    },
    {
        maintitle: "Project #10",
        subtitle: "Apple Swift Accelerator",
        content: "Led a team to develop and market an iOS application. Learned application security, branding, and best practices from Apple’s App Developers Program.",
        link: "github.com", // Replace with actual link
        img: "pictures/swift.gif",
    },
    {
        maintitle: "Project #11 ",
        subtitle: "SCS Management Software",
        content: "Developed a system for managing events and memberships for the Singapore Computer Society Student Chapter at Ngee Ann Polytechnic.",
        link: "github.com", // Replace with actual link
        img: "pictures/scs.gif",
    },
    {
        maintitle: "Project #12 ",
        subtitle: "Hangout App (Startup Idea)",
        content: "Developing a machine learning-powered app to help users plan meetups efficiently, incorporating AI-based recommendations and scheduling.",
        link: "github.com", // Replace with actual link
        img: "pictures/hangout.gif",
    },
    {
        maintitle: "Project #13 ",
        subtitle: "WorldSkills Singapore Training",
        content: "Training for the 2025 WorldSkills competition in Web Technologies. Specializing in full-stack development, database management, and DSA.",
        link: "github.com", // Replace with actual link
        img: "pictures/worldskills.gif",
    },
];


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
