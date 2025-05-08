import MenuCard from './MenuCard';
import './Specials.css';

const specialItems = [
    {
      id: 101,
      name: 'Chef\'s Special',
      description: 'Seasonal ingredients prepared with chef\'s unique touch',
      price: 28.99,
      image: '/images/chef-special.jpg'
    },
  ];

const Specials = () => {
  return (
    <section className="specials">
      <h2>Today's Specials</h2>
      <div className="specials-grid">
        {specialItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Specials;