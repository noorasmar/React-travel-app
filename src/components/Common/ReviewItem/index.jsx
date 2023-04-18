import './style.css';

function ReviewItem({title, pText, imgSrc}) {
    return (
        <div className="item review-item">
            <h4>{title}</h4>
            <small>{pText}
            </small>
            <p>View more</p>
            <div className="stars">
                <img src={process.env.PUBLIC_URL + "/assets/imgs/reviews/Vector.png"} alt=""/>
                <img src={process.env.PUBLIC_URL + "/assets/imgs/reviews/Vector.png"} alt=""/>
                <img src={process.env.PUBLIC_URL + "/assets/imgs/reviews/Vector.png"} alt=""/>
                <img src={process.env.PUBLIC_URL + "/assets/imgs/reviews/Vector.png"} alt=""/>
                <img src={process.env.PUBLIC_URL + "/assets/imgs/reviews/Vector.png"} alt=""/>
            </div>
            <h6>Olga</h6>
            <small>Weave Studios – Kai Tak
            </small>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + "/assets/imgs/reviews/google.png"} width="20" height="20" alt=""/>
                <span>Google</span>
            </div>
            <img src={process.env.PUBLIC_URL + imgSrc} alt=""/>
        </div>
    );
}

export default ReviewItem;