import { Link } from 'react-router-dom';
import logo from './Assets/Logo.png';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt='Little Lemon logo' />
            </Link>
            <Nav />
        </header>
    );
}

export default Header;