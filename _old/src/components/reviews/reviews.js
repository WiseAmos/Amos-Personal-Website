import "./review.css"

const Review = ({name,description,image}) =>{

    return(
    <div className="review-wrapper">
        <img className="review-pic"src={image}/>
        <div className="review-text-wrapper">
        <h1 className="review-name">
            {name}
        </h1>
        <h2 className="review-texts">
            {description}
        </h2>
        </div>
    </div>
    );
}
export default Review