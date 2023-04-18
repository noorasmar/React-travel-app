import './style.css'

function Input({id, label, placeholder, icon, type}) {
    
    return (
        <>
            <label className="l-title" htmlFor={id}>{label}</label>
            <input className="l-input" id={id} type={type} placeholder={placeholder}/>
            {
                icon && <img className="l-icon" src={process.env.PUBLIC_URL +"/assets/imgs/booking/two-arrows.png"} alt="arrows"></img>
            }
        </>
    );
}

export default Input;