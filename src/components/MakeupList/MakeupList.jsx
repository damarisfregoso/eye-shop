import './MakeupList.css';
import { Link } from 'react-router-dom';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems, handleAddToOrder }) {

  return (
    <div className="MakeupList">
        {makeupItems.map(item => (
          <div key={item._id} className='ListItem'>
            <Link to={`/makeup/${item.name}`}>
              <MakeupListItem 
                makeupItem={item} 
                handleAddToOrder={handleAddToOrder}
              />
            </Link>
          </div>
        ))}
    </div>
  );
}