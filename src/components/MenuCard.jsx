import './MenuCard.css';

const MenuCard = ({ item, featured = false }) => {
  const handleAddToCart = () => {
    console.log(`Added ${item.name} to cart`);
    // Add your cart logic here
  };

  const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    currencyDisplay: 'symbol'
  }).format(price);
};

  return (
    <div className={`menu-card ${featured ? 'featured' : ''}`}>
      <div className="menu-card-img-container">
        <img 
          src={item.image || '/api/placeholder/400/220'} 
          alt={item.name} 
          className="menu-card-img" 
        />
        <div className="menu-card-img-overlay"></div>
      </div>
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-card-footer">
          <div className="menu-card-price">{formatPrice(item.price)}</div>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;