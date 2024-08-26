import logoFooter from './Assets/logo-footer.png';

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
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order-online">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
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