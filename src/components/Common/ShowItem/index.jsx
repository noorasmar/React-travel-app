import './style.css'
import ShowBtn from '../ShowBtn';

function ShowItem({title, pText,}) {
    return (
        <div className="item flight">
            <div className="overlay"></div>
            <div className="info">
                <h4>{title}</h4>
                <p>{pText}</p>
                <div className="btn">
                    <ShowBtn text={title}/>
                </div>
            </div>
        </div>
    );
}

export default ShowItem;