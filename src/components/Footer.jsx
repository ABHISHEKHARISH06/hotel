import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Not Your Grandpa’s Grill</h3>
          <p>We honor the charm of olden times while serving a fine dining experience reimagined for today—where vintage elegance meets contemporary flavor.</p>
        </div>
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 10am - 11pm</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
           <p> Old No. 18, New No. 42, 3rd Floor<br />
            T.T.K. Road, Alwarpet<br />
            Opp. Music Academy, Near Poes Garden<br/>
            Chennai, Tamil Nadu – 600018<br/>
            India</p>
        <p> +91 44276 54321</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Not Your Grandpa’s Grill. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;