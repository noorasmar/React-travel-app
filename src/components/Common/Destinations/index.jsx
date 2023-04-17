import './style.css'
import MockObject from './MockObject'
import PlanItem from './../PlanItem/index';

function Destinations() {
    return (
        <div className="destinations py-3">
            <div className="container">
                <div className="row gx-lg-5 gx-md-3">
                    {
                        MockObject.map((el, index)=>{
                            return (
                                <div key={index} className="col-md-4 py-2">
                                    <PlanItem 
                                        title={el.title}
                                        services={el.services}
                                        imgSrc={el.imgSrc}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Destinations;