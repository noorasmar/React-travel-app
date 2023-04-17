import './style.css'
import ShowItem from './../Common/ShowItem/index';

function Show() {
    return (
        <section className="show">
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-6">
                        <ShowItem 
                            title='Flights'
                            pText='Search Flights & Places Hire to our most popular destinations'
                        />
                    </div>
                    <div className="col-md-6">
                        <ShowItem 
                            title='Hotels'
                            pText='Search Flights & Places Hire to our most popular destinations'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Show;