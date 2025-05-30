import ReservationForm from '../components/ReservationForm';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p><strong>Address:</strong> Old No. 18, New No. 42, 3rd Floor<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T.T.K. Road, Alwarpet<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Opp. Music Academy, Near Poes Garden<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chennai, Tamil Nadu – 600018<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;India</p>
        <p><strong>Phone:</strong> &nbsp;&nbsp;+91 44276 54321</p>
        <p><strong>Email:</strong> &nbsp;&nbsp;&nbsp;chennaipoesgarden@notyourgrandpasgrill.com</p>
        
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