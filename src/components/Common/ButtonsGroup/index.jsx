import './style.css'

function ButtonsGroup() {
    return (
        <div className="buttons py-3">
            <div className="item">
            <button type="button" className="btn btn-link">
                <img src="./assets/imgs/booking/plus.png" alt="plus"/> Add Promo Code</button>
            </div>
            <div className="item">
            <button type="button" className="btn btn-primary">
                <img src="./assets/imgs/booking/send.png" alt="plus"/> Show Filghts</button>
            </div>
        </div>
    );
}

export default ButtonsGroup;