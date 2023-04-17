import './style.css'
import Tabs from '../Common/Tabs';
import Form from '../Common/Form';

function Booking() {
    return (
        <section className="booking">
            <div className="container">
                <Tabs />
                <Form />
            </div>
        </section>    
    );
}

export default Booking;