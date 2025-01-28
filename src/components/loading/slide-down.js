import { useEffect } from "react";
import "./slide-down.css"

const Slideup = ({title=""}) =>{

    useEffect(() => { 
        var cover = document.getElementsByClassName("cover")[0];
        if(sessionStorage.getItem("prev-page-status")=="return"){
            cover.style.top = "0px";
            var coverText = cover.getElementsByTagName("h1")[0];
            coverText.innerText = "Loading...";
            coverText.classList.add("slide-down-h1");

            
            cover.classList.add("slide-up");
            sessionStorage.setItem("prev-page-status","none")
            setTimeout(() => {
                cover.style.top = "-100vh";
                cover.classList.remove("slide-up");
            }, 3000);
        }
    }, []);
    return(
    <div className="cover">
        <h1 className="cover-title" >Loading...</h1>
    </div>
    )
}

export default Slideup;