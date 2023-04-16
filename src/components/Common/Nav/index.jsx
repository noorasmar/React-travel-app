import './style.css'
import BtnLinks from '../BtnLinks';
import Logo from '../Logo';
import Login from '../Login';
import SignUp from '../SignUp';

function Nav() {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="find">
                <div className="item">
                    <BtnLinks text='Flight'/>
                </div>
                <div className="item">
                    <BtnLinks text='Stays'/>
                </div>
                </div>
                <div className="navbar-brand">
                    <Logo />
                </div>
                <div className="login">
                    <Login />
                    <SignUp />
                </div>
            </div>
        </nav>
    );
}

export default Nav;