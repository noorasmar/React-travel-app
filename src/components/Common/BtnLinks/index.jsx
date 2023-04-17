
function BtnLinks({text}) {
    let imagePath
    if(text === 'Flight'){
        imagePath = process.env.PUBLIC_URL + '/assets/imgs/header/plan.png'
    }else{
        imagePath = process.env.PUBLIC_URL + '/assets/imgs/header/bed.png'
    }

    return (
        <>
            <img src={imagePath} alt="plan" />
            <a href="#header" alt='flight'>Find {text}</a>
        </>
    );
}

export default BtnLinks;