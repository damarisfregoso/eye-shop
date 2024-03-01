import './MakeupList.css';
import { Link } from 'react-router-dom';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems, handleAddToOrder }) {

  const items = makeupItems.map(item => 
    <div className="items" key={item._id}>
      <Link to={`/makeup/${item.name}`}>
        <img src={item.images} alt={item.name} />
        <h4>{item.name}</h4>
        <h4 className="name">{item.by}</h4>
        <p className='info'>{item.info}</p>
      </Link>
      <MakeupListItem 
        key={item._id}
        makeupItem={item}
        handleAddToOrder={handleAddToOrder}
      />
    </div>
  );

  return (
    <div className="MakeupList">
      {items}
    </div>
  );
}