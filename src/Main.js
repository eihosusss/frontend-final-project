import hero from './Assets/restauranfood.jpg';
import greekSalad from './Assets/greek salad.jpg';
import bruchetta from './Assets/bruchetta.svg';
import lemonDessert from './Assets/lemon dessert.jpg';
import delivery from './Assets/delivery.png';
import userImage from './Assets/images.png';
import aboutUs from './Assets/About.png'

function Main() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Little Lemon</h1> {/* text color: F4CE14. Markazi Text, Medium, 64pt */}
                    <h2>Chicago</h2> {/* text color: EDEFEE. Markazi Text, Regular, 40pt */}
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p> {/* text color: EDEFEE. Karla, Regular, 16pt. Maximum 65 symbols per line */}
                    <button>Reserve Table</button> {/* text color: 333. Karla, Medium, 18pt. Button: color: F4CE14, width: 180, height:150, rounded corners: 10 */}
                </div>
                <div className="hero-image">
                    <img src={hero} alt="Hero Image" /> {/* Replace src="#" with the actual image path */}
                </div>
            </section>

            {/* Specials Section */}
            <section className="specials">
                <div className="specials-header">
                    <h1>Specials</h1> {/*Karla, medium, 40, #000*/}
                    <button>Online Menu</button> {/* text color: 333. Karla, Medium, 18pt. Button: color: F4CE14, width: 200, height:60, rounded corners: 16 */}
                </div>
                <div className="specials-cards"> {/* Maximum 3 cards per row */}
                    <article className="card">
                        <img src={greekSalad} alt="Greek Salad" /> {/* width: 265, height: 185, rounded corners-top: 16 */}
                        <div className="container">
                            <div>
                                <h2>Greek Salad</h2> {/*Markazi text, medium, 24, #000*/}
                                <h2>$12.99</h2> {/*Karla, bold, 16, #ee972*/}
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p> {/*Karla, regular, 16, #495e57*/}
                            <div>
                                <h2>Order a delivery</h2> {/*Karla, bold, 16, #333*/}
                                <img src={delivery} alt="Delivery Icon" /> {/* Needs to be on the same line and infront of <h2>Order a delivery</h2>*/}
                            </div>
                        </div>
                    </article>
                    <article className="card">
                        <img src={bruchetta} alt="Bruchetta" /> {/* width: 265, height: 185, rounded corners-top: 16 */}
                        <div className="container">
                            <div>
                                <h2>Bruchetta</h2> {/*Markazi text, medium, 24, #000*/}
                                <h2>$5.99</h2> {/*Karla, bold, 16, #ee972*/}
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p> {/*Karla, regular, 16, #495e57*/}
                            <div>
                                <h2>Order a delivery</h2> {/*Karla, bold, 16, #333*/}
                                <img src={delivery} alt="Delivery Icon" /> {/* Needs to be on the same line and infront of <h2>Order a delivery</h2>*/}
                            </div>
                        </div>
                    </article>
                    <article className="card">
                        <img src={lemonDessert} alt="Lemon Dessert" /> {/* width: 265, height: 185, rounded corners-top: 16 */}
                        <div className="container">
                            <div>
                                <h2>Lemon Dessert</h2> {/*Markazi text, medium, 24, #000*/}
                                <h2>$5.00</h2> {/*Karla, bold, 16, #ee972*/}
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p> {/*Karla, regular, 16, #495e57*/}
                            <div>
                                <h2>Order a delivery</h2> {/*Karla, bold, 16, #333*/}
                                <img src={delivery} alt="Delivery Icon" /> <img src={delivery} alt="Delivery Icon" /> {/* Needs to be on the same line and infront of <h2>Order a delivery</h2>*/}
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>Testimonials</h2> {/* Markazi text, medium, 36pt, #333 */}
                <div className="testimonial-cards"> {/* Maximum 3 cards per row */}
                    <article className="card">
                        <div className="rating">
                            <h2>Rating: 5/5</h2> {/* Karla, bold, 14pt, #000 */}
                        </div>
                        <div className="user-info">
                            <img src={userImage} alt="User Avatar" /> {/* width:50, height:50 */}
                            <h2>Customer 1</h2> {/* Karla, bold, 14pt, #000. Needs to be to the left of user avatar img on the same line */}
                        </div>
                        <p>Review text</p> {/* Karla, regular, 14pt, #000 */}
                    </article>
                    <article className="card">
                        <div className="rating">
                            <h2>Rating: 3/5</h2> {/* Karla, bold, 14pt, #000 */}
                        </div>
                        <div className="user-info">
                            <img src={userImage} alt="User Avatar" /> {/* width:50, height:50 */}
                            <h2>Customer 1</h2> {/* Karla, bold, 14pt, #000. Needs to be to the left of user avatar img on the same line */}
                        </div>
                        <p>Review text</p> {/* Karla, regular, 14pt, #000 */}
                    </article>
                    <article className="card">
                        <div className="rating">
                            <h2>Rating: 4/5</h2> {/* Karla, bold, 14pt, #000 */}
                        </div>
                        <div className="user-info">
                            <img src={userImage} alt="User Avatar" /> {/* width:50, height:50 */}
                            <h2>Customer 1</h2> {/* Karla, bold, 14pt, #000. Needs to be to the left of user avatar img on the same line */}
                        </div>
                        <p>Review text</p> {/* Karla, regular, 14pt, #000 */}
                    </article>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="about-text"> {/* Needs to be on the right side of the section */}
                    <h1>Little Lemon</h1> {/* Markazi text, medium, 64, #000 */}
                    <h2>Chicago</h2> {/* Markazi text, regular, 40, #333 */}
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p> {/* Karla, bold, 20, #000 */}
                </div>
                <div className="about-images"> {/* Needs to be on the left side of the section */}
                    <img src={aboutUs} alt="About Us" /> {/* placed in the middle of the flexbox */}
                </div>
            </section>
        </main>
    );
}

export default Main;