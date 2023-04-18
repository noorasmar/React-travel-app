import './style.css';
import ShowBtn from './../ShowBtn/index';

function ButtonsGroup() {
    return (
        <div className="buttons py-3">
            <div className="item">
            <button type="button" className="btn btn-link">
                <img src={process.env.PUBLIC_URL + "/assets/imgs/booking/plus.png"} alt="plus"/> Add Promo Code</button>
            </div>
            <div className="item">
                <ShowBtn text='Filghts'/>
            </div>
        </div>
    );
}

export default ButtonsGroup;