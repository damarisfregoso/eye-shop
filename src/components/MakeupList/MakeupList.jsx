import './MakeupList.css';
import { Link } from 'react-router-dom';
import MakeupListItem from '../MakeupListItem/MakeupListItem';

export default function MakeupList({ makeupItems, handleAddToOrder, user }) {

  const items = makeupItems.map(item => 
    <div className="items" key={item._id}>
      <MakeupListItem 
        key={item._id}
        makeupItem={item}
        handleAddToOrder={handleAddToOrder}
        user={user}
      />
    </div>
  );

  return (
    <div className="MakeupList">
      {items}
    </div>
  );
}