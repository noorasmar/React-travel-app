import './style.css'
import Overlay from '../Common/Overlay';
import Nav from '../Common/Nav';
import Title from '../Common/Title';

function Header() {
    return (
        <header className="rounded-4">
            <Overlay />
            <Nav />
            <Title />
        </header>
    );
}

export default Header;