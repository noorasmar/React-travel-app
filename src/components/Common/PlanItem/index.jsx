import './style.css'

function PlanItem({title, services, imgSrc}) {
    return (
        <div className="item">
            <img src={imgSrc} alt=""/>
            <div>
                <h5>{title}</h5>
                <span>{services}</span>
            </div>
        </div>
    );
}

export default PlanItem;