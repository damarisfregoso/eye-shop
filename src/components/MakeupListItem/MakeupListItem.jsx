import './MakeupListItem.css';

export default function MakeupListItem({ makeupItem, handleAddToOrder }) {
  return (
      <div className="MakeupListItem">
        <div className="buy">
          <span>${makeupItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(makeupItem._id)}>
            ADD
          </button>
      </div>
      </div>
  );
}