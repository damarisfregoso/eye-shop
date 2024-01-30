import './MakeupListItem.css';

export default function MakeupListItem({ makeupItem }) {
  return (
    <div className="MakeupListItem">
      <div>{makeupItem.name}</div>
      <div className="name">{makeupItem.by}</div>
      <div className='image'>
        <img src={makeupItem.images} alt="{makeupItem.name}" />
        </div>
      <div className='info'>{makeupItem.info}</div>
      <div className="buy">
        <span>${makeupItem.price.toFixed(2)}</span>
      </div>
    </div>
  );
}