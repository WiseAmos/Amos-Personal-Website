import './resume.css'   
import React, {useState} from 'react';
import Review from '../../components/reviews/reviews'
import { ReverseSubtractEquation } from 'three';

const reviews = [
    {
        name:"Emmanuel Chang (teammate)",
        description:'Amos is a really good student at ngee ann polytechnic',
        image:'reviews/emmanuel.jpeg',
    },
    {
        name:"ian lim (teammate)",
        description:'Amos is a really good student at ngee ann polytechnic',
        image:'reviews/emmanuel.jpeg',
    }
]



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
        <h1 className='title-top'>Resume PDF (scroll down for more)</h1>
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