import "./expand.css"


const Expand = ({maintitle,subtitle,content,link,img}) => {
    function expand_mod(e){
        if(e.target.className !== "close-button-project"){
            window.location.href = link;
        }
    }

    return(
        <div className='alert-box-project'style={{"--i":1}} onClick={(e)=>{expand_mod(e)}}>
            <div className='box-top-project'>
                <h1>{maintitle}</h1>
                <img className='close-button-project' src='svg/close.svg' onClick={()=>{
                    window.location = "/"
                    sessionStorage.setItem("prev-page-status","return");
                }}/>
            </div>
            <div className='alert-text-wrapper-project'>
                <img className='alert-icon-project' src={img} />
                <div className="text-value-project">
                    <h1 className='alert-text-project'>{subtitle}</h1>
                    <h2 className="body-text-project">{content}</h2>
                </div>
            </div>
        </div>
    );
}

export default Expand;