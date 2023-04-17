import './style.css'

function TabItem({tabName}) {
    let imagePath
    if(tabName === 'Flight'){
        imagePath = process.env.PUBLIC_URL + '/assets/imgs/booking/b_plan.png'
    }else{
        imagePath = process.env.PUBLIC_URL + '/assets/imgs/booking/b_bed.png'
    }
    
    return (
        <div className={tabName === 'Flight'?"item active": 'item'}>
            <img src={imagePath} alt="b_plan" />
            {tabName}
        </div>
    );
}

export default TabItem;