import './Hero.css';
import heroBg from '../assets/images/hero-bg.jpg';


const Hero = () => {
  return (
    <section 
      className="hero"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1>Welcome to Not Your Grandpa’s Grill</h1>
        <p>Experience culinary excellence in every bite</p>
        <button className="hero-btn">Reserve a Table</button>
      </div>
    </section>
  );
};

export default Hero;