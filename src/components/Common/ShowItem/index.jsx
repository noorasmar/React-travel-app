import './style.css'
import ShowBtn from '../ShowBtn';

function ShowItem({title, pText,}) {
    let classCss = ''
    if(title === 'Flights')
        classCss = "item flight show-item"
    else
        classCss = "item hotel show-item"
    return (
        <div className={classCss}>
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