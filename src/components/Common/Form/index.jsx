import './style.css'
import FromToInput from '../FromToInput';
import Select from '../Select';
import Date from '../Date';
import Passenger from './../Passenger/index';
import ButtonsGroup from '../ButtonsGroup';

function Form() {
    return (
        <form>
            <div className="row py-3">
                <div className="col-md-4 col-sm-12">
                    <div className="input-wrapper">
                        <FromToInput />
                    </div>
                </div>
                <div className="col-md">
                    <div className="input-wrapper">
                        <Select />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="input-wrapper">
                        <Date />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="input-wrapper">
                        <Passenger />
                    </div>
                </div>
            </div>
            <ButtonsGroup />
        </form>
    );
}

export default Form;