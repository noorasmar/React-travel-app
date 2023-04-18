import './style.css'
import Select from '../Select';
import ButtonsGroup from '../ButtonsGroup';
import Input from '../Input';

function Form() {
    return (
        <form className='form-booking'>
            <div className="row py-3">
                <div className="col-md-4 col-sm-12">
                    <div className="input-wrapper">
                        <Input 
                            id='pos'
                            label='From - To'
                            placeholder='Lahore - Karashi'
                            icon={true}
                            type='text'
                        />
                    </div>
                </div>
                <div className="col-md">
                    <div className="input-wrapper">
                        <Select />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="input-wrapper">
                        <Input 
                            id='date'
                            label='Depart - Return'
                            placeholder='07 Nov 22 - 13 Nov 22'
                            icon={false}
                            type='date'
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="input-wrapper">
                        <Input 
                            id='passenger'
                            label='Passenger - Class'
                            placeholder='1 Passenger, Economy'
                            icon={false}
                            type='text'
                        />
                    </div>
                </div>
            </div>
            <ButtonsGroup />
        </form>
    );
}

export default Form;