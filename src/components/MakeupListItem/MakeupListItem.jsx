import './MakeupListItem.css';

export default function MakeupListItem({ makeupItem }) {
  return (
    <div className="MakeupListItem">
      <h1>{makeupItem.name}</h1>
        <h4 className="name">{makeupItem.by}</h4>
        <img src={makeupItem.images} alt="{makeupItem.name}" />
        <p className='info'>{makeupItem.info}</p>
        <span>${makeupItem.price.toFixed(2)}</span>
    </div>
  );
}