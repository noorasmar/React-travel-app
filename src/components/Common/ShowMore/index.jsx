import './style.css'

function ShowMore({title, pText, btnText}) {
    return (
        <div className="row">
            <div className="col-8">
            <h2>{title}</h2>
            <p>{pText}</p>
            </div>
            <div className="see-more col-4">
            <button type="button" className="btn btn-light">{btnText}</button>
            </div>
        </div>
    );
}

export default ShowMore;