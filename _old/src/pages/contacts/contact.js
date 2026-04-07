import "./contact.css"

const Contact = ()=>{

    return(
        <>
          <img className='back-icon' src='svg/back-arrow.svg' onClick={()=>{
                    window.location = "/"
                    sessionStorage.setItem("prev-page-status","return");
                }}/>
         <div className="main-wrapper">
            <h1 className="title-contact">Contact me!</h1>
            <div className="icons">
                <img onClick={(e) => {
                window.location.href = "https://www.linkedin.com/in/amosgoh1/";
            }}src="svg/linkedin.svg"/>
                <img onClick={(e) => {
                window.location.href = "https://github.com/WiseAmos";
            }} src="svg/github.svg"/>
                <img onClick={(e) => {
                window.location.href = "mailto:amosgej@gmail.com";
            }} src="svg/gmail.svg"/>
            </div>
        </div>
        </>
    )
}

export default Contact