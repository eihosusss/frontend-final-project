import logoFooter from './Assets/logo-footer.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logoFooter} alt="Little Lemon Footer Logo" />
                </div>

                <div className="footer-nav">
                    <h4>Navigation</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/reservations">Reservations</Link></li>
                        <li><Link to="/order-online">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Address: 1234 Lemon St, Citrus City, CA 90210</p>
                    <p>Phone: 555-555-5555</p>
                    <p>Email: info@littlelemon.com</p>
                </div>

                <div className="footer-social">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="#facebook">Facebook</a></li>
                        <li><a href="#instagram">Instagram</a></li>
                        <li><a href="#youtube">YouTube</a></li>
                        <li><a href="#tiktok">TikTok</a></li>
                        <li><a href="#x">X (formerly Twitter)</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;