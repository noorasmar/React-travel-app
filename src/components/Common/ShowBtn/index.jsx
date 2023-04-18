import './style.css'

function ShowBtn({text}) {
    return (
        <>
            <button type="button" className="btn btn-primary">
            <img src={process.env.PUBLIC_URL + "/assets/imgs/booking/send.png"} alt="plus"/> Show {text}</button>
        </>
    );
}

export default ShowBtn;