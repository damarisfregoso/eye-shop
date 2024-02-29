import './MakeupListItem.css';

export default function MakeupListItem({ makeupItem, handleAddToOrder }) {
  return (
      <div className="MakeupListItem">
        <img src={makeupItem.images} alt="{makeupItem.name}" />
        <h4>{makeupItem.name}</h4>
        <h4 className="name">{makeupItem.by}</h4>
        <p className='info'>{makeupItem.info}</p>
        <div className="buy">
          <span>${makeupItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(makeupItem._id)}>
            ADD
          </button>
      </div>
      </div>
  );
}