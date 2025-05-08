import './MenuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} className="menu-card-img" />
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="menu-card-footer">
          <span>${item.price}</span>
          <button className="add-to-cart">Add to Order</button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;