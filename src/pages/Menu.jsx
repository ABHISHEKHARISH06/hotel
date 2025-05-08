import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import './Menu.css';

const menuItems = [
    {
      id: 1,
      name: 'Truffle Pasta',
      description: 'Handmade pasta with black truffle and parmesan cream sauce',
      price: 24.99,
      image: '/images/truffle-pasta.jpg',
      category: 'mains'
    },
    {
      id: 2,
      name: 'Filet Mignon',
      description: '8oz grass-fed beef with roasted vegetables and red wine reduction',
      price: 32.99,
      image: '/images/filet-mignon.jpg',
      category: 'mains'
    },
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