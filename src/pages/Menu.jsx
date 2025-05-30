import { useState } from 'react';
import MenuCard from '../components/MenuCard';
import './Menu.css';
import { ImEarth } from 'react-icons/im';

const menuItems = [
  {
    id: 1,
    name: 'Bursty Tomato Burrata Salad',
    description: 'Fresh heirloom tomatoes with creamy burrata cheese and basil',
    price: 350,
    image: '/images/tomato-burrata.jpg',
    category: 'starters'
  },
  {
    id: 2,
    name: 'Ribollita',
    description: 'Traditional Tuscan bread soup with vegetables and beans',
    price: 250,
    image: '/images/ribollita.jpg',
    category: 'starters'
  },
  {
    id: 3,
    name: 'Filet Mignon',
    description: '8oz grass-fed beef with roasted vegetables and red wine reduction',
    price: 1500,
    image: '/images/filet-mignon.jpg',
    category: 'mains'
  },
  {
    id: 4,
    name: 'Truffle Pasta',
    description: 'Handmade pasta with black truffle and parmesan cream sauce',
    price: 800,
    image: '/images/truffle-pasta.jpg',
    category: 'mains'
  },
  {
    id: 5,
    name: 'Chicken Biryani',
    description: 'Fragrant basmati rice with spiced chicken and saffron',
    price: 300,
    image: '/images/chicken-biryani.jpg',
    category: 'mains'
  },
  {
    id: 6,
    name: 'Classic Tres Leches Cake',
    description: 'Sponge cake soaked in three kinds of milk with whipped cream',
    price: 250,
    image: '/images/tres-leches.jpg',
    category: 'desserts'
  },
  {
    id: 7,
    name: 'Gulab Jamun',
    description: 'Golden fried dough balls in rose-scented syrup',
    price: 100,
    image: '/images/gulab-jamun.jpg',
    category: 'desserts'
  },
  {
    id: 8,
    name: 'Screwdriver Cocktail',
    description: 'Vodka with fresh orange juice and a splash of soda',
    price: 350,
    image: '/images/screwdriver.jpg',
    category: 'drinks'
  },
  {
    id: 9,
    name: 'Watermelon Mojito',
    description: 'Fresh watermelon muddled with mint and rum',
    price: 250,
    image: '/images/watermelon-mojito.jpg',
    category: 'drinks'
  },
  {
    id: 10,
    name: 'Smoked Old Fashioned',
    description: 'Classic bourbon cocktail with a smoky twist',
    price: 600,
    image: '/images/smoked-old-fashioned.jpg',
    category: 'drinks'
  },
  {
    id: 11,
    name: 'Charcoal Lemonade',
    description: 'Detoxifying lemonade with activated charcoal & mint',
    image: '/images/charcoal-lemonade.jpg',
    price: 200,
    category: 'drinks'
  },
  {
    id: 12,
    description: 'Icy nitro cold brew with vanilla ice cream',
    price: 300,
    name: 'Nitro Cold Brew Float',
    image: '/images/nitro-cold-brew-float.jpg',
    category: 'drinks'
  },
  {
    id: 13,
    name: 'Campfire S’mores Jar',
    description: 'Gooey chocolate, graham crumbs & torched marshmallow layers',
    price: 250,
    image: '/images/campfire.jpg',
    category: 'desserts'
  },
  {
    id: 14,
    name: 'Grilled Pineapple & Rum Sauce',
    description: 'Charred pineapple rings with warm spiced rum syrup',
    price: 300,
    image: '/images/grilled-pineapple.jpg',
    category: 'desserts'
  },
  {
    id: 15,
    name: 'Smoked Cheesecake Slice',
    description: 'Classic cheesecake kissed with hickory smoke',
    price: 250,
    image: '/images/smoked-cheesecake-slice.jpg',
    category: 'desserts'
  },
  {
    id:16,
    name:'Beetroot Cutlet',
    description:'Spiced beetroot and potato patties, pan-fried to a crispy golden finish',    
    price: 200,
    image:'/images/beetroot-cutlet.jpg',
    category:'starters'
  },
  {
    id: 17,
    name:'Whiskey BBQ Chicken Wings',
    description:'Smoked wings glazed in a bold whiskey-BBQ sauce',
    price: 400,
    image:'/images/Whiskey-BBQ.jpg',
    category:'starters'
  },
  {
    id:18,
    name:'Charred Corn & Feta Bites',
    description:'Fire-roasted corn fritters topped with feta and chili-lime dust',
    price: 250,
    image:'/images/charred-corn.jpg',
    category:'starters'
  },
  {
    id:19,
    name:'Korean Cauliflower Popcorn',
    description:'Crispy cauliflower tossed in sweet-spicy gochujang glaze',
    price: 300,
    category:'starters',
    image:'/images/korean-cauli.jpg'
  },
  {
    id:20,
    name:'Jackfruit BBQ Burrito Bowl',
    description:'Smoky jackfruit, beans, rice, guac & fire-grilled veggies',
    price: 350,
    category:'mains',
    image:'/images/jackfruit-bbq.jpg'
  },
  {
    id:21,
    name:'Cajun Grilled Prawn Platter',
    description:'Jumbo prawns with Cajun spices, grilled to perfection',
    price: 700,
    category:'mains',
    image:'/images/grilled-prawn.jpg'
  },
  {
    id:22,
    name:'Veg Pulao',
    description:'Fragrant basmati rice with seasonal vegetables and spices', 
    price: 200,
    category:'mains',
    image:'/images/veg-pulao.jpg'
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
