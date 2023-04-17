import './style.css'
import TabItem from '../TabItem';

function Tabs() {
    return (
        <div className="tabs">
            <TabItem tabName='Flight'/>
            <TabItem tabName='Stays'/>
        </div>
    );
}

export default Tabs;