import './style.css'
import ShowMore from '../Common/ShowMore';
import Destinations from '../Common/Destinations';

function Plan() {
    return (
        <section className="plan">
            <div className="container">
                <ShowMore 
                    title='Plan your perfect trip'
                    pText='Search Flights & Places Hire to our most popular destinations'
                    btnText='See more places'
                />
                <Destinations />
            </div>
        </section>
    );
}

export default Plan;