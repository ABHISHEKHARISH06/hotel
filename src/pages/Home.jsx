import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Specials />
      <Testimonials />
    </div>
  );
};

export default Home;