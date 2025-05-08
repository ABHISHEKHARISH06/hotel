import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import './Menu.css';

const menuItems = [
  // Starters
  {
    id: 1,
    name: 'Bursty Tomato Burrata Salad',
    description: 'Fresh heirloom tomatoes with creamy burrata cheese and basil',
    price: 14.99,
    image: '/images/tomato-burrata.jpg',
    category: 'starters'
  },
  {
    id: 2,
    name: 'Ribollita',
    description: 'Traditional Tuscan bread soup with vegetables and beans',
    price: 12.99,
    image: '/images/ribollita.jpg',
    category: 'starters'
  },

  // Mains
  {
    id: 3,
    name: 'Filet Mignon',
    description: '8oz grass-fed beef with roasted vegetables and red wine reduction',
    price: 32.99,
    image: '/images/filet-mignon.jpg',
    category: 'mains'
  },
  {
    id: 4,
    name: 'Truffle Pasta',
    description: 'Handmade pasta with black truffle and parmesan cream sauce',
    price: 24.99,
    image: '/images/truffle-pasta.jpg',
    category: 'mains'
  },
  {
    id: 5,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice with spiced chicken and saffron',
    price: 18.99,
    image: '/images/chicken-biryani.jpg',
    category: 'mains'
  },

  // Desserts
  {
    id: 6,
    name: 'Classic Tres Leches Cake',
    description: 'Sponge cake soaked in three kinds of milk with whipped cream',
    price: 9.99,
    image: '/images/tres-leches.jpg',
    category: 'desserts'
  },
  {
    id: 7,
    name: 'Gulab Jamun',
    description: 'Golden fried dough balls in rose-scented syrup',
    price: 8.99,
    image: '/images/gulab-jamun.jpg',
    category: 'desserts'
  },

  // Drinks
  {
    id: 8,
    name: 'Screwdriver Cocktail',
    description: 'Vodka with fresh orange juice and a splash of soda',
    price: 10.99,
    image: '/images/screwdriver.jpg',
    category: 'drinks'
  },
  {
    id: 9,
    name: 'Watermelon Mojito',
    description: 'Fresh watermelon muddled with mint and rum',
    price: 11.99,
    image: '/images/watermelon-mojito.jpg',
    category: 'drinks'
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="category-filter">
        <button 
          onClick={() => setActiveCategory('all')}
          className={activeCategory === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => setActiveCategory('starters')}
          className={activeCategory === 'starters' ? 'active' : ''}
        >
          Starters
        </button>
        <button 
          onClick={() => setActiveCategory('mains')}
          className={activeCategory === 'mains' ? 'active' : ''}
        >
          Mains
        </button>
        <button 
          onClick={() => setActiveCategory('desserts')}
          className={activeCategory === 'desserts' ? 'active' : ''}
        >
          Desserts
        </button>
        <button 
          onClick={() => setActiveCategory('drinks')}
          className={activeCategory === 'drinks' ? 'active' : ''}
        >
          Drinks
        </button>
      </div>
      <div className="menu-grid">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;