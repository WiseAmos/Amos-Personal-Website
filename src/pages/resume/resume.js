import './resume.css'   
import React, {useState} from 'react';
import Review from '../../components/reviews/reviews'

const reviews = [
    {
        name: "Emmanuel Chang (Teammate)",
        description: "Amos is an exceptionally skilled technical teammate with a deep understanding of cybersecurity and software development. His ability to rapidly grasp complex concepts and implement effective solutions makes him a valuable asset in any project. Working alongside him, I’ve seen firsthand how he combines technical expertise with problem-solving skills to develop innovative solutions that optimize both security and efficiency. His adaptability and willingness to explore new technologies make collaboration both productive and insightful.",
        image: "reviews/emmanuel.jpeg",
    },
    {
        name: "Ian Lim (Teammate)",
        description: "Amos is not only a technically proficient teammate but also a strong and inspiring leader. His ability to drive the team forward stems from his deep technical expertise in cybersecurity, software development, and system architecture, as well as his ability to keep everyone motivated. He ensures that the team stays focused and works cohesively by fostering a collaborative environment where every member's strengths are utilized effectively. His leadership qualities, coupled with his problem-solving mindset, make him an invaluable team player in both technical and strategic roles.",
        image: "reviews/ian.jpeg",
    }
];



const Resume = ()=>{
    const [name, setName] = useState(reviews[0]["name"]);
    const [description, setDescription] = useState(reviews[0]["description"]);
    const [image, setImage] = useState(reviews[0]["image"]);
    const [index, setIndex] = useState(0);

function nextreview(direction){
    if (direction=="left"){
        if(index==0){
        }
        else{
            console.log(index)
            setName(reviews[index-1]["name"])
            setDescription(reviews[index-1]["description"])
            setImage(reviews[index-1]["image"])
            setIndex(index-1)
        }
    }
    else{
        if(index==(reviews.length-1)){
            
        }
        else{
            setName(reviews[index+1]["name"])
            setDescription(reviews[index+1]["description"])
            setImage(reviews[index+1]["image"])
            setIndex(index+1)
        }
    }
}

return(
    <div className='resume-main'>
        <img className='back-icon' src='svg/back-arrow.svg' onClick={()=>{
                    window.location = "/"
                    sessionStorage.setItem("prev-page-status","return");
                }}/>
        <h1 className='title-top mobile-top-title'>Resume PDF (scroll down for more)</h1>
        <iframe className="iframe-pdf" src="pdf/amos.pdf" width='70%' height='800px'/>
        <h1 className='title-top second-title'>Testimony from teammates</h1>
        <div className='reviews-main-wrapper'>
            <img onClick={()=>{nextreview("left")}} className='reviews-arrow'src="svg/review-arrow-left.svg"/>
            <div className='reviews-content'>
               <Review name={name} description={description} image={image}/>
            </div>
            <img onClick={()=>{nextreview("right")}} className='reviews-arrow' src="svg/review-arrow-right.svg"/>
        </div>
    </div>
)
}

export default Resume