
function Select() {
    return (
        <>
            <label className="l-title" htmlFor="trip">Trip</label>
            <select className="l-input" name="trip" id="trip">
                <option value="return">Return</option>
            </select>
            <img className="l-icon" src="./assets/imgs/booking/chevron.png" alt="chevron"/>
        </>
    );
}

export default Select;