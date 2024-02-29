import './MakeupList.css';
import { Link } from 'react-router-dom';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems, handleAddToOrder }) {

  const items = makeupItems.map(item => 
    <Link to={`/makeup/${item.name}`}>
      <MakeupListItem 
        key={item._id}
        makeupItem={item}
        handleAddToOrder={handleAddToOrder}
      />
    </Link>
    );

  return (
    <div className="MakeupList">
      {items}
    </div>
  );
}