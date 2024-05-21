import './MakeupListItem.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function MakeupListItem({ makeupItem, handleAddToOrder, user }) {

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleAddClick = () => {
    // Check if the user is authenticated
    if (!user) {
      // If not authenticated, set shouldRedirect to true
      setShouldRedirect(true);
    } else {
      // If authenticated, proceed with adding the item to the order
      handleAddToOrder(makeupItem._id);
    }
  };

  console.log('Makeup Item:', makeupItem);

  return (
      <div className="MakeupListItem">
        <img src={makeupItem.images} alt={makeupItem.name} />
        <h4>{makeupItem.name}</h4>
        <h4 className="name">{makeupItem.by}</h4>
        <p className='info'>{makeupItem.info}</p>
        <div className="buy">
          <span>${makeupItem.price.toFixed(2)}</span>
          <button className="AddButton" onClick={handleAddClick}>
            ADD
          </button>
          {shouldRedirect && <Navigate to="/login" />}
      </div>
      </div>
  );
}