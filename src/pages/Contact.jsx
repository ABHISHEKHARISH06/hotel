import ReservationForm from '../components/ReservationForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p><strong>Address:</strong> 123 Culinary Street, Foodville, FC 12345</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@notyourgrandpasgrill.com</p>
        
        <div className="opening-hours">
          <h2>Opening Hours</h2>
          <p>Monday - Friday: 11am - 10pm</p>
          <p>Saturday - Sunday: 10am - 11pm</p>
        </div>
      </div>
      
      <div className="reservation-section">
        <h2>Make a Reservation</h2>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Contact;