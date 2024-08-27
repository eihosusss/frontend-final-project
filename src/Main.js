import hero from './Assets/restauranfood.jpg';
import greekSalad from './Assets/greek salad.jpg';
import bruchetta from './Assets/bruchetta.png';
import lemonDessert from './Assets/lemon dessert.jpg';
import delivery from './Assets/delivery.png';
import userImage from './Assets/images.png';
import aboutUs from './Assets/About.png'
import { Link } from 'react-router-dom';

function Main() {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    <Link to="/reservations">
                        <button>Reserve Table</button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img src={hero} alt="Hero Image" />
                </div>
            </section>

            {/* Specials Section */}
            <section className="specials">
                <div className="specials-header">
                    <h1>Specials</h1>
                    <Link to="/menu">
                    <button>Online Menu</button>
                    </Link>
                </div>
                <div className="specials-cards">
                    <article className="card">
                        <img src={greekSalad} alt="Greek Salad" />
                        <div className="container">
                            <div>
                                <h2>Greek Salad</h2>
                                <h2>$12.99</h2>
                            </div>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <Link to="/order-online">
                                <div className='specials-cards-button'>
                                <h2>Order a delivery</h2>
                                <img src={delivery} alt="Delivery Icon" />
                                </div>
                            </Link>
                        </div>
                    </article>
                    <article className="card">
                        <img src={bruchetta} alt="Bruchetta" />
                        <div className="container">
                            <div>
                                <h2>Bruchetta</h2>
                                <h2>$5.99</h2>
                            </div>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <Link to="/order-online">
                                <div className='specials-cards-button'>
                                <h2>Order a delivery</h2>
                                <img src={delivery} alt="Delivery Icon" />
                                </div>
                            </Link>
                        </div>
                    </article>
                    <article className="card">
                        <img src={lemonDessert} alt="Lemon Dessert" />
                        <div className="container">
                            <div>
                                <h2>Lemon Dessert</h2>
                                <h2>$5.00</h2>
                            </div>
                            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <Link to="/order-online">
                                <div className='specials-cards-button'>
                                <h2>Order a delivery</h2>
                                <img src={delivery} alt="Delivery Icon" />
                                </div>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial-cards">
                    <article className="card">
                        <div className="rating">
                            <h2>Rating: 5/5</h2>
                        </div>
                        <div className="user-info">
                            <img src={userImage} alt="User Avatar" />
                            <h2>Customer 1</h2>
                        </div>
                        <p>Review text</p>
                    </article>
                    <article className="card">
                        <div className="rating">
                            <h2>Rating: 3/5</h2>
                        </div>
                        <div className="user-info">
                            <img src={userImage} alt="User Avatar" />
                            <h2>Customer 1</h2>
                        </div>
                        <p>Review text</p>
                    </article>
                    <article className="card">
                        <div className="rating">
                            <h2>Rating: 4/5</h2>
                        </div>
                        <div className="user-info">
                            <img src={userImage} alt="User Avatar" />
                            <h2>Customer 1</h2>
                        </div>
                        <p>Review text</p>
                    </article>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="about-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <div className="about-images">
                    <img src={aboutUs} alt="About Us" />
                </div>
            </section>
        </main>
    );
}

export default Main;