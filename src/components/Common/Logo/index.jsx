
function Logo() {
    const imagePath = process.env.PUBLIC_URL + '/assets/imgs/logo/logo.png'

    return (
        <a href="#">
            <img src={imagePath} alt="plan" />
        </a>
    );
}

export default Logo;