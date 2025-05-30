import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import './Home.css';
import restaurantInterior from '../assets/images/interior.jpg';
const Home = () => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    // Smooth scrolling for any anchor links
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="home">
      <Hero />

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              At Not Your Grandpa's Grill, we believe in honoring tradition while embracing innovation.
              Our culinary journey began with a simple mission: to create memorable dining experiences
              that blend the warmth of old-fashioned hospitality with contemporary culinary excellence.
            </p>
            <p>
              Every dish tells a story, every ingredient is carefully selected, and every meal is
              crafted with passion. We're not just serving food – we're creating moments that matter.
            </p>
          </div>
          <div className="about-image">
            {!imageError ? (
              <img src={restaurantInterior} alt="Restaurant Interior" onError={handleImageError} />
            ) : (
              <div className="image-placeholder">
                Restaurant Interior
              </div>
            )}
          </div>
        </div>
      </section>

      <Specials />

      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Signature Dishes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.6★</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;