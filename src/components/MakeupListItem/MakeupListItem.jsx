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

  return (
      <div className="MakeupListItem">
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