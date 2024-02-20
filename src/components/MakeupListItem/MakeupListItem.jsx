import './MakeupListItem.css';

export default function MakeupListItem({ makeupItem, handleAddToOrder }) {
  return (
      <div className="MakeupListItem">
          <img src={makeupItem.images} alt="{makeupItem.name}" />
          <h4>{makeupItem.name}</h4>
          <h4 className="name">{makeupItem.by}</h4>
          <p className='info'>{makeupItem.info}</p>
          <p className='price'>${makeupItem.price.toFixed(2)}</p>
          <button className='btn' onClick={() => handleAddToOrder}></button>
      </div>
  );
}