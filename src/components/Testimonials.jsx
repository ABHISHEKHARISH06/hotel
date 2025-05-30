import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Gordon Ramsay',
    title: 'Food Critic',
    comment: 'The best dining experience I\'ve had this year! The filet mignon was cooked to perfection, and the service was impeccable. Every detail shows the care and passion of the team.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mukesh Ambani',
    title: 'Local Business Owner',
    comment: 'Not Your Grandpa\'s Grill has become our go-to spot for client dinners. The atmosphere is perfect for business meetings, and the food never disappoints.',
    rating: 5
  },
  {
    id: 3,
    name: 'Virat Kohli',
    title: 'Regular Customer',
    comment: 'I\'ve been coming here for over two years, and the consistency in quality is remarkable. The staff remembers my preferences, and I always feel welcomed.',
    rating: 5
  },
  {
    id: 4,
    name: 'AK',
    title: 'Anniversary Dinner',
    comment: 'Celebrated our 10th anniversary here and it was magical. The ambiance, the food, the service - everything was perfect. Thank you for making our night special!',
    rating: 5
  }
];

const Testimonials = () => {
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="star">
        {index < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-avatar">
              {getInitials(testimonial.name)}
            </div>
            <div className="rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="comment">"{testimonial.comment}"</p>
            <div className="testimonial-author">
              <div className="name">{testimonial.name}</div>
              <div className="title">{testimonial.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;